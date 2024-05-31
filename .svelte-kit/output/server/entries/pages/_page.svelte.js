import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
let wasm;
const heap = new Array(128).fill(void 0);
heap.push(void 0, null, true, false);
function getObject(idx) {
  return heap[idx];
}
let heap_next = heap.length;
function dropObject(idx) {
  if (idx < 132)
    return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
const cachedTextEncoder = new TextEncoder("utf-8");
typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function(arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
const cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
function addHeapObject(obj) {
  if (heap_next === heap.length)
    heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
function make_wordcloud(config) {
  const ret = wasm.make_wordcloud(addHeapObject(config));
  return takeObject(ret);
}
const logo = "/arcus/app/immutable/assets/logo.4f42b7db.svg";
const downloadIcon = "/arcus/app/immutable/assets/download.1d59fe5c.svg";
const brushIcon = "/arcus/app/immutable/assets/brush.f3b80138.svg";
const propertiesIcon = "/arcus/app/immutable/assets/properties.e6afad11.svg";
const backIcon = "/arcus/app/immutable/assets/arrow_back.581b1309.svg";
const MenuHeader_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "#header.svelte-1h5yjn9{display:flex;padding:1rem 0px;border-bottom:1px solid var(--divider);margin-bottom:1rem}span.svelte-1h5yjn9{font-size:18px;font-weight:bold;margin-left:2rem;margin-right:8px}#icon.svelte-1h5yjn9{width:24px}#back.svelte-1h5yjn9{cursor:pointer}",
  map: null
};
const MenuHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { icon } = $$props;
  let { contentState } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.contentState === void 0 && $$bindings.contentState && contentState !== void 0)
    $$bindings.contentState(contentState);
  $$result.css.add(css$5);
  return `<div id="header" class="svelte-1h5yjn9"><img id="back"${add_attribute("src", backIcon, 0)} alt="" class="svelte-1h5yjn9"> <span class="svelte-1h5yjn9">${escape(title)}</span> <img id="icon"${add_attribute("src", icon, 0)} alt="Menu icon" class="svelte-1h5yjn9"> </div>`;
});
const Property_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".property.svelte-154428m{display:flex;flex-flow:column nowrap;margin-bottom:24px}.title.svelte-154428m{font-weight:500;color:var(--darker)}.description.svelte-154428m{font-size:14px;color:var(--dark);margin-bottom:1rem}.content.svelte-154428m{display:flex;gap:1rem}",
  map: null
};
const Property = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$4);
  return `<div class="property svelte-154428m"><span class="title svelte-154428m">${escape(title)}</span> <span class="description svelte-154428m">${escape(description)}</span> <div class="content svelte-154428m">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
const AppearanceMenu_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "#properties.svelte-15s5vlj{overflow-y:auto;height:100%;padding-bottom:4rem;scrollbar-width:none}#properties.svelte-15s5vlj::-webkit-scrollbar{display:none}.relative-scaling.svelte-15s5vlj{width:100%}.percentage-text.svelte-15s5vlj{width:30%;max-width:80px}#color-value.svelte-15s5vlj{width:110px;text-transform:uppercase}#appearance-menu.svelte-15s5vlj{height:100%}",
  map: null
};
const AppearanceMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contentState } = $$props;
  let { config } = $$props;
  if ($$props.contentState === void 0 && $$bindings.contentState && contentState !== void 0)
    $$bindings.contentState(contentState);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div id="appearance-menu" ${contentState !== ContentState$1.Appearance ? "hidden" : ""} class="svelte-15s5vlj">${validate_component(MenuHeader, "MenuHeader").$$render(
      $$result,
      { title: "Appearance", icon: brushIcon, contentState },
      {
        contentState: ($$value) => {
          contentState = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div id="properties" class="svelte-15s5vlj">${validate_component(Property, "Property").$$render(
      $$result,
      {
        title: "Font",
        description: "The font used for words in the image"
      },
      {},
      {
        default: () => {
          return `<select id="font-select"><option value="Ubuntu" data-svelte-h="svelte-81dggi">Ubuntu</option></select> `;
        }
      }
    )}  ${validate_component(Property, "Property").$$render(
      $$result,
      {
        title: "Background color",
        description: "The background color of the image"
      },
      {},
      {
        default: () => {
          return `<input type="color"${add_attribute("value", config.appearance.backgroundColor, 0)}> <input type="text" id="color-value"${add_attribute("value", config.appearance.backgroundColor, 0)} class="svelte-15s5vlj">`;
        }
      }
    )} ${validate_component(Property, "Property").$$render(
      $$result,
      {
        title: "Margin",
        description: "Empty space surrounding each word"
      },
      {},
      {
        default: () => {
          return `<select id=""${add_attribute("value", config.appearance.margin.toString(), 0)}><option value="2" data-svelte-h="svelte-1v4wmt2">2px</option><option value="4" data-svelte-h="svelte-kumjp2">4px</option><option value="6" data-svelte-h="svelte-1j6t792">6px</option><option value="8" data-svelte-h="svelte-1kowud2">8px</option></select>`;
        }
      }
    )} ${validate_component(Property, "Property").$$render(
      $$result,
      {
        title: "Minimum font size",
        description: "The smallest size that text can be"
      },
      {},
      {
        default: () => {
          return `<select id=""${add_attribute("value", config.appearance.minimumFontSize.toString(), 0)}><option selected value="4" data-svelte-h="svelte-ahyf69">4px</option><option value="8" data-svelte-h="svelte-1kowud2">8px</option><option value="12" data-svelte-h="svelte-nx707y">12px</option><option value="16" data-svelte-h="svelte-rt2q06">16px</option></select>`;
        }
      }
    )} ${validate_component(Property, "Property").$$render(
      $$result,
      {
        title: "Maximum font size",
        description: 'The largest size that text can be. If set to "Auto", the size is determined based on the dimensions of the image'
      },
      {},
      {
        default: () => {
          return `<select id=""${add_attribute("value", (config.appearance.maximumFontSize || 0).toString(), 0)}><option value="0" data-svelte-h="svelte-1755q8v">Auto</option><option value="8" data-svelte-h="svelte-1kowud2">8px</option><option value="16" data-svelte-h="svelte-rt2q06">16px</option><option value="24" data-svelte-h="svelte-12gmcl2">24px</option><option value="24" data-svelte-h="svelte-1ti03hv">32px</option><option value="68" data-svelte-h="svelte-1iyg2bu">64px</option><option value="110" data-svelte-h="svelte-bv2uuf">128px</option></select>`;
        }
      }
    )} ${validate_component(Property, "Property").$$render(
      $$result,
      {
        title: "Font step",
        description: "How much the font size is decreased each time there is no more space at a specific font size"
      },
      {},
      {
        default: () => {
          return `<select name="" id=""${add_attribute("value", config.appearance.fontStep.toString(), 0)}><option value="1" data-svelte-h="svelte-t29jtw">1px</option><option value="2" data-svelte-h="svelte-1v4wmt2">2px</option><option value="4" data-svelte-h="svelte-kumjp2">4px</option><option value="8" data-svelte-h="svelte-1kowud2">8px</option><option value="16" data-svelte-h="svelte-rt2q06">16px</option></select>`;
        }
      }
    )} ${validate_component(Property, "Property").$$render(
      $$result,
      {
        title: "Relative scaling",
        description: "How much of an impact word frequency has on the font size of a word"
      },
      {},
      {
        default: () => {
          return `<input type="range" class="relative-scaling svelte-15s5vlj" min="0" max="100" step="10"${add_attribute("value", config.appearance.relativeScaling * 100, 0)}> <input type="text" class="percentage-text svelte-15s5vlj" maxlength="4"${add_attribute("value", Math.floor(config.appearance.relativeScaling * 100) + "%", 0)}>`;
        }
      }
    )}</div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
const PropertiesMenu_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#properties.svelte-18byglz.svelte-18byglz{overflow-y:auto;height:100%;padding-bottom:4rem;scrollbar-width:none}#properties.svelte-18byglz.svelte-18byglz::-webkit-scrollbar{display:none}.rotate-chance.svelte-18byglz.svelte-18byglz{width:100%}.percentage-text.svelte-18byglz.svelte-18byglz{width:30%;max-width:80px}#properties-menu.svelte-18byglz.svelte-18byglz{height:100%}#regex-content.svelte-18byglz.svelte-18byglz{width:100%\n    }#regex-content.svelte-18byglz input.svelte-18byglz{width:100%}",
  map: null
};
function boolToSelect(value) {
  return value ? "yes" : "no";
}
const PropertiesMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contentState } = $$props;
  let { config } = $$props;
  if ($$props.contentState === void 0 && $$bindings.contentState && contentState !== void 0)
    $$bindings.contentState(contentState);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div id="properties-menu" ${contentState !== ContentState$1.Properties ? "hidden" : ""} class="svelte-18byglz">${validate_component(MenuHeader, "MenuHeader").$$render(
      $$result,
      { title: "Properties", icon: propertiesIcon, contentState },
      {
        contentState: ($$value) => {
          contentState = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div id="properties" class="svelte-18byglz">${validate_component(Property, "Property").$$render(
      $$result,
      {
        title: "Regex",
        description: 'Determines what a "word" is'
      },
      {},
      {
        default: () => {
          return `<div id="regex-content" class="svelte-18byglz"><input class="code svelte-18byglz" type="text"${add_attribute("value", config.properties.regex, 0)}> </div>`;
        }
      }
    )} ${validate_component(Property, "Property").$$render(
      $$result,
      {
        title: "Exclude words",
        description: "Exclude these words from the wordcloud"
      },
      {},
      {
        default: () => {
          return `<textarea name="" id="" cols="30" rows="10">${"" + escape(config.properties.excludeWords, false) + "\n            "}</textarea>`;
        }
      }
    )} ${validate_component(Property, "Property").$$render(
      $$result,
      {
        title: "Repeat words",
        description: "Place the same words multiple times if there aren't enough to reach the word limit"
      },
      {},
      {
        default: () => {
          return `<select id=""${add_attribute("value", boolToSelect(config.properties.repeatWords), 0)}><option value="no" data-svelte-h="svelte-u9l2ja">No</option><option value="yes" data-svelte-h="svelte-y2mbp4">Yes</option></select>`;
        }
      }
    )} ${validate_component(Property, "Property").$$render(
      $$result,
      {
        title: "Word limit",
        description: "The maximum amount of words to place"
      },
      {},
      {
        default: () => {
          return `<select id=""${add_attribute("value", config.properties.wordLimit.toString(), 0)}><option selected value="100" data-svelte-h="svelte-20nttv">100</option><option value="200" data-svelte-h="svelte-14el3m6">200</option><option value="400" data-svelte-h="svelte-1889uby">400</option><option value="800" data-svelte-h="svelte-11w7oem">800</option><option value="1000" data-svelte-h="svelte-13o1r62">1000</option><option value="2000" data-svelte-h="svelte-1eqgcwe">2000</option></select>`;
        }
      }
    )} ${validate_component(Property, "Property").$$render(
      $$result,
      {
        title: "Minimum word length",
        description: "The minimum amount of letters in a word"
      },
      {},
      {
        default: () => {
          return `<select id=""${add_attribute("value", config.properties.minimumWordLength.toString(), 0)}><option selected value="1" data-svelte-h="svelte-676bft">1 letter</option><option value="2" data-svelte-h="svelte-1b26i01">2 letters</option><option value="3" data-svelte-h="svelte-1kp18lz">3 letters</option><option value="4" data-svelte-h="svelte-1wo8dwt">4 letters</option><option value="5" data-svelte-h="svelte-169c8wn">5 letters</option></select>`;
        }
      }
    )} ${validate_component(Property, "Property").$$render(
      $$result,
      {
        title: "Exclude numbers",
        description: "Exclude matches consisting of only numeric characters"
      },
      {},
      {
        default: () => {
          return `<select id=""${add_attribute("value", boolToSelect(config.properties.excludeNumbers), 0)}><option value="no" data-svelte-h="svelte-u9l2ja">No</option><option value="yes" data-svelte-h="svelte-y2mbp4">Yes</option></select>`;
        }
      }
    )} ${validate_component(Property, "Property").$$render(
      $$result,
      {
        title: "Rotate chance",
        description: "How likely it is for a word to be rotated"
      },
      {},
      {
        default: () => {
          return `<input type="range" class="rotate-chance svelte-18byglz" min="0" max="100" step="10"${add_attribute("value", config.properties.rotateChance * 100, 0)}> <input type="text" class="percentage-text svelte-18byglz"${add_attribute("value", Math.floor(config.properties.rotateChance * 100) + "%", 0)}>`;
        }
      }
    )}</div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
const MaskMenu_svelte_svelte_type_style_lang = "";
const Content_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#content.svelte-1rzdv4h{max-width:390px}",
  map: null
};
var ContentState$1 = /* @__PURE__ */ ((ContentState2) => {
  ContentState2[ContentState2["Home"] = 0] = "Home";
  ContentState2[ContentState2["Mask"] = 1] = "Mask";
  ContentState2[ContentState2["Appearance"] = 2] = "Appearance";
  ContentState2[ContentState2["Properties"] = 3] = "Properties";
  return ContentState2;
})(ContentState$1 || {});
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let state = ContentState$1.Home;
  let { config } = $$props;
  let { updateWordcloud } = $$props;
  let { handleDownload } = $$props;
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  if ($$props.updateWordcloud === void 0 && $$bindings.updateWordcloud && updateWordcloud !== void 0)
    $$bindings.updateWordcloud(updateWordcloud);
  if ($$props.handleDownload === void 0 && $$bindings.handleDownload && handleDownload !== void 0)
    $$bindings.handleDownload(handleDownload);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div id="content" class="svelte-1rzdv4h"><div id="home" ${state !== ContentState$1.Home ? "hidden" : ""}><textarea name="" placeholder="Write text here" id="text">${escape(config.text || "")}</textarea> <div id="controls"><div id="scale-container"><span data-svelte-h="svelte-wqsi0s">Scale</span> <select name="" id=""><option value="1" data-svelte-h="svelte-80dg0a">1x</option><option value="2" data-svelte-h="svelte-oo04ys">2x</option><option value="4" data-svelte-h="svelte-ezc5t0">4x</option><option value="6" data-svelte-h="svelte-10m3kis">6x</option></select></div> <div id="buttons"> <button title="Download your Wordcloud" data-svelte-h="svelte-1a9l5nt"><img${add_attribute("src", downloadIcon, 0)} width="24" alt=""></button> <button title="Edit appearance" data-svelte-h="svelte-3alq3i"><img${add_attribute("src", brushIcon, 0)} alt=""></button> <button title="Edit properties" data-svelte-h="svelte-q3eaqh"><img${add_attribute("src", propertiesIcon, 0)} alt=""></button></div></div> <button id="update-button" data-svelte-h="svelte-rpglll">Update</button></div> ${validate_component(AppearanceMenu, "AppearanceMenu").$$render(
      $$result,
      { contentState: state, config },
      {
        contentState: ($$value) => {
          state = $$value;
          $$settled = false;
        },
        config: ($$value) => {
          config = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(PropertiesMenu, "PropertiesMenu").$$render(
      $$result,
      { contentState: state, config },
      {
        contentState: ($$value) => {
          state = $$value;
          $$settled = false;
        },
        config: ($$value) => {
          config = $$value;
          $$settled = false;
        }
      },
      {}
    )}  </div>`;
  } while (!$$settled);
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1w4qt1k{display:flex;gap:4px}",
  map: null
};
var ContentState = /* @__PURE__ */ ((ContentState2) => {
  ContentState2[ContentState2["Home"] = 0] = "Home";
  ContentState2[ContentState2["Mask"] = 1] = "Mask";
  ContentState2[ContentState2["Appearance"] = 2] = "Appearance";
  ContentState2[ContentState2["Properties"] = 3] = "Properties";
  return ContentState2;
})(ContentState || {});
const width = 390;
const height = 265;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvas;
  let initializedWasm = false;
  const defaultAppearance = {
    font: new Uint8Array(),
    colorFunction: "none",
    backgroundColor: "#070f21",
    margin: 2,
    minimumFontSize: 4,
    maximumFontSize: null,
    fontStep: 1,
    relativeScaling: 0.5
  };
  const defaultProperties = {
    regex: "\\w[\\w']*",
    excludeWords: ["a", "about", "above", "after", "again", "against"].join("\n"),
    repeatWords: true,
    wordLimit: 200,
    minimumWordLength: 1,
    excludeNumbers: true,
    rotateChance: 0.5
  };
  let config = {
    text: "",
    mask: new Uint8Array(),
    appearance: defaultAppearance,
    properties: defaultProperties,
    scale: 1
  };
  function updateWordcloud() {
    const cloudBuffer = make_wordcloud(config);
    const context = canvas.getContext("2d");
    const scaledWidth = width * config.scale;
    const scaledHeight = height * config.scale;
    canvas.setAttribute("width", scaledWidth.toString());
    canvas.setAttribute("height", scaledHeight.toString());
    const imageData = new ImageData(cloudBuffer, scaledWidth, scaledHeight);
    createImageBitmap(imageData).then((bitmap) => {
      context.drawImage(bitmap, 0, 0);
    });
  }
  function downloadImage() {
    const link = document.createElement("a");
    link.download = "filename.png";
    link.href = canvas.toDataURL();
    link.click();
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (config && initializedWasm) {
        console.log("updated");
        updateWordcloud();
      }
    }
    $$rendered = `<div id="app"><header class="svelte-1w4qt1k" data-svelte-h="svelte-m4ofaz"><img id="logo"${add_attribute("src", logo, 0)} alt="Icon of a cloud"> <h2 id="title">Arcus</h2></header> <main><div id="wordcloud-container"><canvas id="wordcloud-canvas"${add_attribute("this", canvas, 0)}></canvas></div> ${validate_component(Content, "Content").$$render(
      $$result,
      {
        handleDownload: downloadImage,
        updateWordcloud,
        config
      },
      {
        config: ($$value) => {
          config = $$value;
          $$settled = false;
        }
      },
      {}
    )}</main> </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  ContentState,
  Page as default
};
