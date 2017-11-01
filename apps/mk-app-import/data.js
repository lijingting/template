export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'import',
		children: [{
			name: 'header',
			component: 'Button',
			children: '选择文件'
		}]
	}
}

export function getData() {
	return {
		form: {},
	}
}