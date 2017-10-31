import React from 'react'
import { action as MetaAction, AppLoader } from 'mk-meta-engine'
import config from './config'
import webapi from './webapi'

class action {
	constructor(option) {
		this.metaAction = option.metaAction
		this.config = config
	}
	
	onInit = ({ component, injections }) => {
		this.component = component
		this.injections = injections
		injections.reduce('init')
	}

    load = async (pagination, filter = {}) => {
        const response = await webapi.person.query({ filter })
        response.filter = filter
        //this.injections.reduce('load', response)
    }
}

export default function creator(option) {
    const metaAction = new MetaAction(option),
        o = new action({ ...option, metaAction }),
        ret = { ...metaAction, ...o }

    metaAction.config({ metaHandlers: ret })

    return ret
}