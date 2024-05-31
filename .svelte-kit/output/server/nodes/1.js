

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.153a80fd.js","app/immutable/chunks/scheduler.92d9c31b.js","app/immutable/chunks/index.0055131f.js","app/immutable/chunks/entry.fc1871ae.js"];
export const stylesheets = [];
export const fonts = [];
