export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "arcus/app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"app/immutable/entry/start.d74db323.js","app":"app/immutable/entry/app.4a81ed6e.js","imports":["app/immutable/entry/start.d74db323.js","app/immutable/chunks/entry.38169856.js","app/immutable/chunks/scheduler.92d9c31b.js","app/immutable/entry/app.4a81ed6e.js","app/immutable/chunks/scheduler.92d9c31b.js","app/immutable/chunks/index.0055131f.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
