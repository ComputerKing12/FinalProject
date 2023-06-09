import { c as create_ssr_component, e as each, b as add_attribute, d as escape, v as validate_component } from "../../chunks/index.js";
import "@fortawesome/fontawesome";
import "@fortawesome/fontawesome-free-solid";
/* empty css                                                      */const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".nav.svelte-1p7j4q4{width:100%;height:100%;display:grid;grid-template-rows:1fr 1fr;background:#000}.item.svelte-1p7j4q4{padding-block:0.5em;width:100%;text-align:center}.container.svelte-1p7j4q4{display:flex;align-items:center;height:100%;flex-direction:column;justify-content:center}a.svelte-1p7j4q4{text-decoration:none;color:#fff;display:block;width:100%;padding-block:1em}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = false;
  let top = [
    {
      display: "Welcome",
      url: "/",
      active: false
    },
    {
      display: "Album Name",
      url: "/album",
      active: false
    },
    {
      display: "Artists/Characters",
      url: "/artists",
      active: false
    },
    {
      display: "Playlist",
      url: "/playlist",
      active: false
    },
    {
      display: "Favs",
      url: "/favorites",
      active: false
    }
  ];
  let bottom = [
    ["Bookmarks", "/bookmarks"],
    ["Our Goals", "/goals"],
    ["Gallery", "/gallery"],
    ["Annotations", "/annotations"],
    ["Contact", "/contact"]
  ];
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css$1);
  return `<div class="nav svelte-1p7j4q4"><div class="top"><div class="container svelte-1p7j4q4">${each(top, (item) => {
    return `<div class="item svelte-1p7j4q4"><a${add_attribute("href", item.url, 0)} class="${["svelte-1p7j4q4", item.active ? "selected" : ""].join(" ").trim()}">${escape(item.display)}</a>
				</div>`;
  })}</div></div>
	<div class="bottom"><div class="container svelte-1p7j4q4">${each(bottom, (item) => {
    return `<div class="item svelte-1p7j4q4"><a${add_attribute("href", item[1], 0)} class="svelte-1p7j4q4">${escape(item[0])}</a>
				</div>`;
  })}</div></div>
</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-16onais{width:100vw;height:100%;display:grid;grid-template-columns:20% 1fr;padding:0;margin:0;position:absolute;left:0;top:0}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-16onais">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
    ${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Layout as default
};
