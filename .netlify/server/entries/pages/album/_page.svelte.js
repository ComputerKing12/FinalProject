import { c as create_ssr_component, d as escape } from "../../../chunks/index.js";
import { LoremIpsum } from "lorem-ipsum";
import { p as playlist } from "../../../chunks/playlist.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1tv827n{display:grid;grid-template-rows:60% 1fr;color:#1ed760}.header.svelte-1tv827n{background-color:#666;position:relative;display:grid;grid-template-columns:80% 1fr}.title.svelte-1tv827n{display:flex;align-items:end;text-align:center}h2.svelte-1tv827n{width:100%}p.svelte-1tv827n{color:#eee;text-align:justify}.body.svelte-1tv827n{background-color:#444}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: { max: 8, min: 4 },
    wordsPerSentence: { max: 16, min: 4 }
  });
  $$result.css.add(css);
  return `<main class="svelte-1tv827n"><div class="header svelte-1tv827n"><div class="title svelte-1tv827n"><h2 class="svelte-1tv827n">${escape(playlist)}</h2></div>
        <div class="title svelte-1tv827n"><img src="https://www.scholastic.com/content/dam/parents/OptimizedDesignImages/Batch13b/surviving-rumor-mill-article-4-3.jpg" alt="Rumor" width="100%"></div></div>
	<div class="body svelte-1tv827n"><h2 style="color: #fff;" class="svelte-1tv827n">Playlist Summary</h2>
		<p class="svelte-1tv827n">${escape(lorem.generateSentences(10))}</p></div>
</main>`;
});
export {
  Page as default
};
