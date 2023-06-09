import { c as create_ssr_component, e as each, b as add_attribute, d as escape } from "../../../chunks/index.js";
import { s as songs } from "../../../chunks/playlist.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-a61nt3.svelte-a61nt3{width:100%;margin:0;padding:0}.container.svelte-a61nt3.svelte-a61nt3{display:flex;gap:2em;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:center;width:100%}.card.svelte-a61nt3.svelte-a61nt3{background-color:#303030;width:15em;border-radius:10%;display:flex;flex-direction:column;justify-content:center;overflow:hidden;padding:none;margin:none}.card.svelte-a61nt3>img.svelte-a61nt3{align-self:center;border-radius:0 0 10% 10%}.card.svelte-a61nt3>h4.svelte-a61nt3,.card.svelte-a61nt3 p.svelte-a61nt3{position:relative;left:2em;width:12em}img.svelte-a61nt3.svelte-a61nt3{aspect-ratio:1;width:15em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-a61nt3"><div class="container svelte-a61nt3">${each(songs, (a) => {
    return `<div class="card svelte-a61nt3"><img${add_attribute("src", a.artist.url, 0)} alt="${escape(a.artist.name, true) + " Image"}" class="svelte-a61nt3">
				<h4 class="svelte-a61nt3">${escape(a.artist.name)}</h4>
				<p class="svelte-a61nt3">${escape(a.artist.description)}</p>
			</div>`;
  })}</div>
</main>`;
});
export {
  Page as default
};
