exports.validateRequest = function validateRequest(validationRules) {
	return function(req, res, next) {
		Object.keys(validationRules).forEach(function(rule) {
			var fieldsApplicableToRule = validationRules[rule];

			fieldsApplicableToRule.forEach(function(field) {
				var ruleName = rule.split(':');
				switch(ruleName[1]) {
					case 'not_empty':
						getValidationInstance(req, ruleName[0], field, ' required').notEmpty();
					break;
					case 'is_email':
						getValidationInstance(req, ruleName[0], field, ' is not a valid email').isEmail();
					break;
					case 'is_object': 
						getValidationInstance(req, ruleName[0], field, ' is not an object').isObject();
					break;
					case 'is_int':
						getValidationInstance(req, ruleName[0], field, ' is not a valid number').isInt();
					break;
					case 'is_bool':
						getValidationInstance(req, ruleName[0], field, ' is not a valid boolean').isBoolean();
					break;
					case 'is_valid_role':
						getValidationInstance(req, ruleName[0], field, ' is not a valid role').validRole();
					break;
					case 'is_valid_visit_status':
						getValidationInstance(req, ruleName[0], field, ' invalid').validVisitStatus();
					break;
					case 'is_valid_visit_start_date':
						getValidationInstance(req, ruleName[0], field, ' invalid').validVisitStartDate();
					break;
					case 'is_valid_visit_end_date':
						getValidationInstance(req, ruleName[0], field, ' invalid').validVisitEndDate();
					break;
					case 'is_valid_reception_mode':
						getValidationInstance(req, ruleName[0], field, ' invalid').validReceptionMode();
					break;
					case 'is_array':
						getValidationInstance(req, ruleName[0], field, ' is not a valid array').isArray();
					break;
					case 'max_length_content':
						getValidationInstance(req, ruleName[0], field, ' should be less than 250 characters').maxLengthContent();
					break;
					case 'valid_status':
						getValidationInstance(req, ruleName[0], field, ' is invalid').validStatus();
					break;
					case 'check_max_array_length':
						getValidationInstance(req, ruleName[0], field, ' array length should be less than 100').checkArrayMaxLength();
					break;
					case 'is_date':
						getValidationInstance(req, ruleName[0], field, ' is not a valid date').isDate();
					break;
					case 'sort_emp':
						getValidationInstance(req, ruleName[0], field, ' is not a employee sort field').isEmpSortField();
					break;
					case 'is_numeric_array':
						getValidationInstance(req, ruleName[0], field, ' is not valid numeric array').isNumericArray();
					break;
					case 'valid_meeting_status':
						getValidationInstance(req, ruleName[0], field, ' is not valid').validMeetingStatus();
					break;
					case 'valid_meeting_approval_status':
						getValidationInstance(req, ruleName[0], field, ' is not valid').validMeetingApprovalStatus();
					break;
				}
			});
		});
		returnResponse (req.validationErrors(), req, res, next);		
	};
};

function getValidationInstance(req, ruleNamePrefix, field, message) {
	switch(ruleNamePrefix) {
		case 'q':
			return req.checkQuery(field, field + message);
		case 'qop':
			return req.checkQuery(field, field + message).optional();
		case 'p':
			return req.checkParams(field, field + message);
		case 'pop':
			return req.checkParams(field, field + message).optional();
		case 'b':
			return req.checkBody(field, field + message);
		case 'bop':
			return req.checkBody(field, field + message).optional();
		default:
			console.log('Unknown validation type : ' + ruleNamePrefix);
		break;
	}
}

function returnResponse(err, req, res, next ) {
	if(err) {
		res.json({ message: 'Validation failure', data: err });
	} else {
		next();
	}
}