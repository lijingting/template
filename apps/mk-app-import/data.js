export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'mk-app-root',
		children: [{
			name: 'header',
			component: 'Layout',
			className: 'mk-app-root-left-header',
			children: '导入模版'
		}]
	}
}

export function getData() {
	return {
		form: {},
	}
}