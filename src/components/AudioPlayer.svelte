<script lang="ts">
    import { onMount } from 'svelte'

    let duration: any = [[0, 0], [0, 0]]

    export let artist: string, name: string, album: string, cover: string, source: string

    onMount(async () => {
        await PlayPause()
        await PlayPause()

        var player = document.getElementById("player")
        player?.addEventListener("timeupdate", async () => {
            let cur = Math.floor(player?.currentTime)
            let dur = Math.floor(player?.duration) - cur
            duration[0] = [Math.floor(cur / 60), cur - Math.floor(cur / 60) * 60]
            duration[1] = [Math.floor(dur / 60), dur - Math.floor(dur / 60) * 60]

            if (duration[0][0] <= 9)
            {
                duration[0][0] = "0" + duration[0][0]
            } if (duration[0][1] <= 9)
            {
                duration[0][1] = "0" + duration[0][1]
            } if (duration[1][0] <= 9)
            {
                duration[1][0] = "0" + duration[1][0]
            } if (duration[1][1] <= 9)
            {
                duration[1][1] = "0" + duration[1][1]
            }

            var pro = document.getElementById("progress")
            pro.value = cur / (dur + cur)
        })
    })

    // function Icon(pref: string, name: string)
    // {
    //     var icon = fontawesome.icon({prefix: pref, iconName: name})
    //     return URL.createObjectURL(new Blob([icon.html], {type: "image/svg+xml"}))
    // }

    let vol: any

    function ChangeVolume()
    {
        document.getElementById("player").volume = document.getElementById("vol").value
    }

    async function PlayPause()
    {
        if (document.getElementById('player').paused)
        {
            let btn = await URL.createObjectURL(new Blob(['<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"/></svg>'], {type: "image/svg+xml"}))
            document.getElementById("play").innerHTML = await `<img src="${btn}" alt="" width=20px id="img" />`
            document.getElementById('player').play()
        } else
        {
            let btn = await URL.createObjectURL(new Blob(['<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/></svg>'], {type: "image/svg+xml"}))
            document.getElementById("play").innerHTML = await `<img src="${btn}" alt="" width=20px id="img" />`
            document.getElementById('player').pause()
        }

        var img = document.getElementById("img")
        var source = await fetch(img.src).then((res) => {
            if (res.ok)
            {
                return res.text()
            } else
            {
                return new Error("Cannot fetch svg")
            }
        })


        var parser = new DOMParser();
        var doc = parser.parseFromString(source, "image/svg+xml").documentElement
        doc.style.color = "red"
        doc.style.width = "20px"
        doc.style.height = "20px"

        document.getElementById("play").innerHTML = doc.outerHTML
        // document.getElementById("play").innerHTML = doc.textContent
        return
    }
</script>

<main>
    <div class="player">
        <div class="left">
            <img src="{cover}" alt="{album}'s cover image">
            <div class="attr">
                <h1>{name}</h1>
                <h3>{artist}</h3>
            </div>
        </div>

        <div class="middle">
            <audio id="player">
                <source src={source} />
            </audio>
            <button on:click={PlayPause} id="play"></button>
            <div>
                <p>{duration[0][0]}:{duration[0][1]}</p>
                <progress id="progress" value="0" max="1"/>
                <p>-{duration[1][0]}:{duration[1][1]}</p>
            </div>
        </div>
        <div class="right">
            <svg xmlns="http://www.w3.org/2000/svg" style="fill: #fff;" width="2em" height="2em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"/></svg>
            <input type="range" min=0 max=1 step=0.05 id="vol" on:click={ChangeVolume} />
        </div>
    </div>
</main>

<style lang="sass">
    .player
        display: grid
        grid-template-columns: repeat(3, 1fr)
        background-color: #000
        color: #fff
        height: 100%
        overflow: hidden

        & > div
            height: 100%

    .middle
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column

        & > button
            height: min-content
            position: relative
            top: 1em
            margin-bottom: 2em
            background-color: #fff
            border-radius: 50%
            width: 40px
            aspect-ratio: 1
            justify-content: center
            align-items: center
            display: flex
            border: none

        & > div 
            display: flex
            width: 90%
            bottom: 1.2em
            position: relative
            & > progress
                width: 100%
    p
        padding-inline: 1em

    .left
        display: flex
        flex-direction: row

        & > img
            margin-right: 1.5em

    .right
        display: flex
        justify-content: right
        margin-right: 3em
        align-items: center

        & > svg
            margin-right: 1em

    h1
        margin: 0
        padding: 0
        font-size: 30px

    img
        width: 5em
        aspect-ratio: 1

    h3
        color: #eee
        text-indent: 1.5em
</style>