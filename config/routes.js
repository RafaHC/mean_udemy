const express = require('express');

module.exports = function(app){
	const router = express.Router();

	app.use('/api',router)
	const billingCycle = require('../api/billingCycle/billingCycleService');
	billingCycle.register(router, '/billingCycles');

}