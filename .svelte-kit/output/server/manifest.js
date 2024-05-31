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
		client: {"start":"app/immutable/entry/start.b241022c.js","app":"app/immutable/entry/app.73880205.js","imports":["app/immutable/entry/start.b241022c.js","app/immutable/chunks/entry.fc1871ae.js","app/immutable/chunks/scheduler.92d9c31b.js","app/immutable/entry/app.73880205.js","app/immutable/chunks/scheduler.92d9c31b.js","app/immutable/chunks/index.0055131f.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
