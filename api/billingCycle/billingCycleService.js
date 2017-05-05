const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get','post','put','delete'])

// Ao atualizar aparece o obj antigo, config para alterar este comportamento
// Ativar as validações no update
BillingCycle.updateOptions({new : true, runValidators : true});

//Estabelecendo a rota de contador
BillingCycle.route('count', function(req,res,next){
	BillingCycle.count((err,value) => {
		if(err){
			res.status(500).json({errors: [err]})
		}else{
			res.json({value})
		}
	})
})

module.exports = BillingCycle;