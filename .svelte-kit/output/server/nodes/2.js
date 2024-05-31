

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/2.6182cac4.js","app/immutable/chunks/scheduler.92d9c31b.js","app/immutable/chunks/index.0055131f.js"];
export const stylesheets = ["app/immutable/assets/2.6f98685e.css"];
export const fonts = [];
