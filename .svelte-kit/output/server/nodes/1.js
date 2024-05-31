

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.ba1d9522.js","app/immutable/chunks/scheduler.92d9c31b.js","app/immutable/chunks/index.0055131f.js","app/immutable/chunks/entry.38169856.js"];
export const stylesheets = [];
export const fonts = [];
