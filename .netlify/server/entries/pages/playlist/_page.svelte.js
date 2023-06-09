import { c as create_ssr_component, d as escape, e as each } from "../../../chunks/index.js";
import { s as songs, p as playlist } from "../../../chunks/playlist.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-lv6d4t{display:grid;grid-template-rows:40% 1fr}table.svelte-lv6d4t{width:95%;border-collapse:collapse;margin:auto}th.svelte-lv6d4t{text-align:left;margin:0;padding:0;border-bottom:2px solid black}a.svelte-lv6d4t{text-decoration:none;cursor:pointer;color:#fff}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-lv6d4t"><div class="top"><p>${escape(playlist)}</p></div>
	<div class="bottom"><table class="svelte-lv6d4t"><tr><th class="svelte-lv6d4t">#</th>
				<th class="svelte-lv6d4t">Song Title</th>
				<th class="svelte-lv6d4t">Artist</th>
				<th class="svelte-lv6d4t">Album</th>
				<th class="svelte-lv6d4t">Line #s</th></tr>
			${each(songs, (s, i) => {
    return `<tr><td>${escape(i + 1)}</td>
					<td><a href="${"/annotations/?slide=" + escape(i, true)}" class="svelte-lv6d4t">${escape(s.name)}</a></td>
					<td>${escape(s.artist.name)}</td>
					<td>${escape(s.album)}</td>
					<td>${escape(s.lines.lines[0])}-${escape(s.lines.lines[1])}</td>
				</tr>`;
  })}</table></div>
</main>`;
});
export {
  Page as default
};
