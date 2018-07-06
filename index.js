const express = require('express')
const app = express();
let validator = require('express-validator');
let customValidations = require('./validation-wrapper/custom-validations');
let validation = require('./validation-wrapper/validation');
let validationParams = require('./validation-params');

let user = require('./user');

// Set custom validations
app.use(validator(customValidations));

app.get('/sayHi', validation.validateRequest(validationParams.sayHi), user.getHiMsg);
app.get('/sayHiOptional', validation.validateRequest(validationParams.sayHiOptional), user.getHiMsgIfPassed);
app.get('/showId/:id', validation.validateRequest(validationParams.passIdInParams), user.passIdInParams);
app.post('/sendTitleInPost/:id', validation.validateRequest(validationParams.postBody), user.postTitle);

app.listen(3000, () => console.log('Example app listening on port 3000!'));