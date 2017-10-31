import { config, start, componentFactory } from 'mk-meta-engine'
import myConfig  from './config'

import mkAppTemplat from './apps/mk-app-templat/index.js'
import mkAppImports from './apps/mk-app-import/index.js'

const apps = {
	config: (options) => {
		Object.keys(options).forEach(key => {
			const reg = new RegExp(`^${key == '*' ? '.*' : key}$`) 
			Object.keys(apps).forEach(appName => { 
				if (appName != 'config') {
					if (reg.test(appName)) {
						apps[appName].config(options[key])
					}
				}
			})
		})
	},
	[mkAppTemplat.name]:mkAppTemplat,
	[mkAppImports.name]:mkAppImports,
}


apps.config({ '*': { apps } })
config(myConfig({ apps }))

import * as mkComponents from 'mk-component'

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	
start()