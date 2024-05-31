import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["app/immutable/nodes/0.15b5ea66.js","app/immutable/chunks/scheduler.92d9c31b.js","app/immutable/chunks/index.0055131f.js"];
export const stylesheets = ["app/immutable/assets/0.4702bebb.css"];
export const fonts = [];
