import { c as create_ssr_component, b as add_attribute, d as escape, f as subscribe, v as validate_component } from "../../../chunks/index.js";
import { s as songs } from "../../../chunks/playlist.js";
import { p as page } from "../../../chunks/stores.js";
import fontawesome from "@fortawesome/fontawesome";
import faFreeSolid from "@fortawesome/fontawesome-free-solid";
/* empty css                                                         */const css$1 = {
  code: ".player.svelte-kvfnfq.svelte-kvfnfq.svelte-kvfnfq{display:grid;grid-template-columns:repeat(3, 1fr);background-color:#000;color:#fff;height:100%;overflow:hidden}.player.svelte-kvfnfq>div.svelte-kvfnfq.svelte-kvfnfq{height:100%}.middle.svelte-kvfnfq.svelte-kvfnfq.svelte-kvfnfq{display:flex;justify-content:center;align-items:center;flex-direction:column}.middle.svelte-kvfnfq>button.svelte-kvfnfq.svelte-kvfnfq{height:min-content;position:relative;top:1em;margin-bottom:2em;background-color:#fff;border-radius:50%;width:40px;aspect-ratio:1;justify-content:center;align-items:center;display:flex;border:none}.middle.svelte-kvfnfq>div.svelte-kvfnfq.svelte-kvfnfq{display:flex;width:90%;bottom:1.2em;position:relative}.middle.svelte-kvfnfq>div.svelte-kvfnfq>progress.svelte-kvfnfq{width:100%}p.svelte-kvfnfq.svelte-kvfnfq.svelte-kvfnfq{padding-inline:1em}.left.svelte-kvfnfq.svelte-kvfnfq.svelte-kvfnfq{display:flex;flex-direction:row}.left.svelte-kvfnfq>img.svelte-kvfnfq.svelte-kvfnfq{margin-right:1.5em}.right.svelte-kvfnfq.svelte-kvfnfq.svelte-kvfnfq{display:flex;justify-content:right;margin-right:3em;align-items:center}.right.svelte-kvfnfq>svg.svelte-kvfnfq.svelte-kvfnfq{margin-right:1em}h1.svelte-kvfnfq.svelte-kvfnfq.svelte-kvfnfq{margin:0;padding:0;font-size:30px}img.svelte-kvfnfq.svelte-kvfnfq.svelte-kvfnfq{width:5em;aspect-ratio:1}h3.svelte-kvfnfq.svelte-kvfnfq.svelte-kvfnfq{color:#eee;text-indent:1.5em}",
  map: null
};
const AudioPlayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  fontawesome.library.add(faFreeSolid);
  let duration = [[0, 0], [0, 0]];
  let { artist, name, album, cover, source } = $$props;
  function Icon(pref, name2) {
    var icon = fontawesome.icon({ prefix: pref, iconName: name2 });
    return URL.createObjectURL(new Blob([icon.html], { type: "image/svg+xml" }));
  }
  if ($$props.artist === void 0 && $$bindings.artist && artist !== void 0)
    $$bindings.artist(artist);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.album === void 0 && $$bindings.album && album !== void 0)
    $$bindings.album(album);
  if ($$props.cover === void 0 && $$bindings.cover && cover !== void 0)
    $$bindings.cover(cover);
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  $$result.css.add(css$1);
  return `<main><div class="player svelte-kvfnfq"><div class="left svelte-kvfnfq"><img${add_attribute("src", cover, 0)} alt="${escape(album, true) + "'s cover image"}" class="svelte-kvfnfq">
            <div class="attr"><h1 class="svelte-kvfnfq">${escape(name)}</h1>
                <h3 class="svelte-kvfnfq">${escape(artist)}</h3></div></div>

        <div class="middle svelte-kvfnfq"><audio id="player"><source${add_attribute("src", source, 0)}></audio>
            <button id="play" class="svelte-kvfnfq"><img${add_attribute("src", Icon("fas", "play"), 0)} alt="" width="20px" id="img" class="svelte-kvfnfq"></button>
            <div class="svelte-kvfnfq"><p class="svelte-kvfnfq">${escape(duration[0][0])}:${escape(duration[0][1])}</p>
                <progress id="progress" value="0" max="1" class="svelte-kvfnfq"></progress>
                <p class="svelte-kvfnfq">-${escape(duration[1][0])}:${escape(duration[1][1])}</p></div></div>
        <div class="right svelte-kvfnfq"><svg xmlns="http://www.w3.org/2000/svg" style="fill: #fff;" width="2em" height="2em" viewBox="0 0 576 512" class="svelte-kvfnfq"><path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path></svg>
            <input type="range" min="0" max="1" step="0.05" id="vol"></div></div>
</main>`;
});
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const afterNavigate = /* @__PURE__ */ client_method("after_navigate");
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1wkh5bl.svelte-1wkh5bl.svelte-1wkh5bl{height:100%}.elem.svelte-1wkh5bl.svelte-1wkh5bl.svelte-1wkh5bl{height:100%;display:grid}button.svelte-1wkh5bl.svelte-1wkh5bl.svelte-1wkh5bl{background-color:inherit;color:#fff;border:none;cursor:pointer;padding:2em}.grid2.svelte-1wkh5bl.svelte-1wkh5bl.svelte-1wkh5bl{display:grid;grid-template-rows:1fr 22.5%}.grid3.svelte-1wkh5bl.svelte-1wkh5bl.svelte-1wkh5bl{display:grid;grid-template-rows:1fr 5% 12.5%}.grid3.svelte-1wkh5bl>.navigation.svelte-1wkh5bl>button.svelte-1wkh5bl{background:inherit;border:none;cursor:pointer}.container.svelte-1wkh5bl.svelte-1wkh5bl.svelte-1wkh5bl{display:grid}.navigation.svelte-1wkh5bl.svelte-1wkh5bl.svelte-1wkh5bl{position:relative;height:100%;display:flex}.navigation.svelte-1wkh5bl>.svelte-1wkh5bl.svelte-1wkh5bl{bottom:0;position:absolute}.navigation.svelte-1wkh5bl>.svelte-1wkh5bl.svelte-1wkh5bl:nth-child(1){left:0}.navigation.svelte-1wkh5bl>.svelte-1wkh5bl.svelte-1wkh5bl:nth-child(2){right:0}.root.svelte-1wkh5bl.svelte-1wkh5bl.svelte-1wkh5bl{display:flex;justify-content:center;align-items:center;flex-direction:column}.body.svelte-1wkh5bl.svelte-1wkh5bl.svelte-1wkh5bl{display:grid;grid-template-columns:1fr 1fr;place-items:center}.body.svelte-1wkh5bl>p.svelte-1wkh5bl.svelte-1wkh5bl{margin-left:1.5em;text-align:justify;margin-right:0.5em}.body.svelte-1wkh5bl>div.svelte-1wkh5bl>p.svelte-1wkh5bl{margin-left:1.5em;text-align:justify;margin-right:0.5em}.child1.svelte-1wkh5bl.svelte-1wkh5bl.svelte-1wkh5bl{border-right:2px dashed black}.annotation.svelte-1wkh5bl.svelte-1wkh5bl.svelte-1wkh5bl{grid-column:1/3;margin-inline:2.25in;text-align:center;margin-top:2em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let slide = $page.url.searchParams.get("slide");
  afterNavigate(async () => {
    let parser = new DOMParser();
    if ($page.url.href.split("/")[3] == "annotations") {
      slide = null;
      let doc = parser.parseFromString(document.getElementById("container")?.outerHTML, "text/html").documentElement;
      doc.style.display = "grid";
      doc.style.gridTemplateRows = "1fr 5%";
      console.log(doc);
    } else {
      let doc = parser.parseFromString(document.getElementById("container")?.outerHTML, "text/html").documentElement;
      doc.style.display = "grid";
      doc.style.gridTemplateRows = "1fr 5% 10%";
      console.log(doc);
    }
  });
  if (slide != null && parseInt(slide) >= songs.length) {
    throw new Error(`Slide not found ${slide}`);
  }
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<main class="svelte-1wkh5bl">${$page.url.href.split("/")[3] == "annotations" ? `<div class="elem grid2 svelte-1wkh5bl" id="container"><div class="container svelte-1wkh5bl">${slide == null ? `<div class="root svelte-1wkh5bl"><h1>Annotations</h1>
					<h2>Please navigate using the buttons at the bottom</h2></div>` : `<h1>${escape(parseInt(slide) + 1)}. Annotation (4.${escape(songs[parseInt(slide)].lines.lines[0])}-${escape(songs[parseInt(slide)].lines.lines[1])})</h1>
				<p>${escape(songs[parseInt(slide)].lines.description)}</p>
				<div class="body svelte-1wkh5bl"><div class="child1 svelte-1wkh5bl"><p class="svelte-1wkh5bl">${escape(songs[parseInt(slide)].lines.QuoteLatin)}</p></div>
					<p class="svelte-1wkh5bl">${escape(songs[parseInt(slide)].lines.QuoteEnglish)}</p>
					<div class="annotation svelte-1wkh5bl"><p class="svelte-1wkh5bl">${escape(songs[parseInt(slide)].lines.annotation)}</p></div></div>`}</div>
		<div class="navigation svelte-1wkh5bl"><button class="svelte-1wkh5bl">Previous Slide</button>
			<button class="svelte-1wkh5bl">Next Slide</button></div>
		${slide != null ? `${validate_component(AudioPlayer, "AudioPlayer").$$render(
    $$result,
    {
      name: songs[parseInt(slide)].name,
      artist: songs[parseInt(slide)].artist.name,
      album: songs[parseInt(slide)].album,
      cover: songs[parseInt(slide)].cover,
      source: songs[parseInt(slide)].source
    },
    {},
    {}
  )}` : ``}</div>` : `<div class="elem grid3 svelte-1wkh5bl" id="container"><div class="container svelte-1wkh5bl">${slide == null ? `<div class="root svelte-1wkh5bl"><h1>Annotations</h1>
					<h2>Please navigate using the buttons at the bottom</h2></div>` : `<h1>${escape(parseInt(slide) + 1)}. Annotation (4.${escape(songs[parseInt(slide)].lines.lines[0])}-${escape(songs[parseInt(slide)].lines.lines[1])})</h1>
				<p>${escape(songs[parseInt(slide)].lines.description)}</p>
				<div class="body svelte-1wkh5bl"><div class="child1 svelte-1wkh5bl"><p class="svelte-1wkh5bl">${escape(songs[parseInt(slide)].lines.QuoteLatin)}</p></div>
					<p class="svelte-1wkh5bl">${escape(songs[parseInt(slide)].lines.QuoteEnglish)}</p>
					<div class="annotation svelte-1wkh5bl"><p class="svelte-1wkh5bl">${escape(songs[parseInt(slide)].lines.annotation)}</p></div></div>`}</div>
		<div class="navigation svelte-1wkh5bl"><button class="svelte-1wkh5bl"><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="4em" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></button>
			<button class="svelte-1wkh5bl"><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="4em" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></button></div>
		${slide != null ? `${validate_component(AudioPlayer, "AudioPlayer").$$render(
    $$result,
    {
      name: songs[parseInt(slide)].name,
      artist: songs[parseInt(slide)].artist.name,
      album: songs[parseInt(slide)].album,
      cover: songs[parseInt(slide)].cover,
      source: songs[parseInt(slide)].source
    },
    {},
    {}
  )}` : ``}</div>`}
</main>`;
});
export {
  Page as default
};
