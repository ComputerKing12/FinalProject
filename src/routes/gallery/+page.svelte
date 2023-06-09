<script lang="ts"></script>

<main>
    <div class="flex">
        <div class="img">
            <img src="/images/image16.jpg" alt="something" />
        </div>
        <div class="images">
            <div class="img">
                <img src="/images/image23.jpg" alt="something" />
            </div>
            <div class="img">
                <img src="/images/image19.jpg" alt="something" />
            </div>
        </div>
        <div class="img">
            <img src="/images/image17.jpg" alt="something" />
        </div>
    </div>
</main>

<style lang="sass">
    main
        display: flex
        flex-direction: row
        // width: 100%
        flex-wrap: wrap
    .flex
        display: flex
        flex-direction: row
        width: 100%
        // gap: 1em
        // aspect-ratio: 1
        height: min-content
        justify-content: space-evenly

    .img
        width: 50%
        aspect-ratio: 1
        height: min-content
        border-radius: 2em
        overflow: hidden

    .images
        width: 20%

        & > .img
            width: 100%

    img
        width: 100%
</style>