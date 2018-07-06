module.exports = {
	sayHi: {
		'q:not_empty': ['name'],
		'q:aName': ['name']
	},
	sayHiOptional: {
		'qop:not_empty': ['name'],
		'qop:aName': ['name']
	},
	passIdInParams: {
		'p:not_empty': 'id',
		'p:is_int': 'id'
	},
	postBody: {
		'p:not_empty': 'title'
	}
};