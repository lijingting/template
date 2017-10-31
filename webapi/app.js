import post from './post'
//wsdl = v1/user?wsdl

export function init() {
	return post('/v1/person/query', {})
}
