export function getMeta() {
	return {
		name: 'root',
		component: '::div',
		className: 'mk-app-templat',
		children: [
			getTabs(),
			getContent()
		]

	}
}

function getTabs() {
	return {
		name: 'tabs',
		component: 'Tabs',
		className: 'new-stock-tabs',
		//activeKey: '{{data.tabKey}}',
		defaultActiveKey: '1',
		onChange: '{{$tabChange}}',
		children:[{
			name: 'voucherTemplate',
			key: '1',
			component: 'Tabs.TabPane',
			tab: '凭证模版'
		}, {
			name: 'templateImport',
			key: '2',
			component: 'Tabs.TabPane',
			tab: '凭证模板Excel导入',
		}, {
			name: 'subject',
			key: '3',
			component: 'Tabs.TabPane',
			tab: '允许客户自行修改科目的业务',
		}, {
			name: 'incomeType',
			key: '4',
			component: 'Tabs.TabPane',
			tab: '收入类型对应属性表',
		}, {
			name: 'businessType',
			key: '5',
			component: 'Tabs.TabPane',
			tab: '业务类型存货关系表',
		}, {
			name: 'invoiceImport',
			key: '6',
			component: 'Tabs.TabPane',
			tab: '发票导入存货对照',
		}, {
			name: 'helpTips',
			key: '7',
			component: 'Tabs.TabPane',
			tab: '帮助提示导入',
		}, {
			name: 'search',
			key: '8',
			component: 'Tabs.TabPane',
			tab: '业务类型搜索',
		}]
	}
}

function getContent() {
	return {
		name: 'content',
		component: '::div',
		className: 'content',
		children: [{
			name: 'voucherTemplate',
			component: 'AppLoader',
			notRender: "{{data.tabKey!='1'}}",
			appName: 'mk-app-import'
		}, {
			name: 'templateImport',
			component: 'AppLoader',
			notRender: "{{data.tabKey!='2'}}",
			appName: 'mk-app-import'
		}, {
			name: 'subject',
			component: 'AppLoader',
			notRender: "{{data.tabKey!='3'}}",
			appName: 'mk-app-import'
		}, {
			name: 'incomeType',
			component: 'AppLoader',
			notRender: "{{data.tabKey!='4'}}",
			appName: 'mk-app-import'
		}, {
			name: 'businessType',
			component: 'AppLoader',
			notRender: "{{data.tabKey!='5'}}",
			appName: 'mk-app-import'
		}, {
			name: 'invoiceImport',
			component: 'AppLoader',
			notRender: "{{data.tabKey!='6'}}",
			appName: 'mk-app-import'
		}, {
			name: 'helpTips',
			component: 'AppLoader',
			notRender: "{{data.tabKey!='7'}}",
			appName: 'mk-app-import'
		}, {
			name: 'search',
			component: 'AppLoader',
			notRender: "{{data.tabKey!='8'}}",
			appName: 'mk-app-import'
		}]
	}
}

export function getData() {
	return {
		data: {
			tabKey: '1'
		}
	}
}