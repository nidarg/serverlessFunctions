const items = require('../assets/data')

exports.handler = async(event, context)=>{
	return{
		// to allow the access to serverless functions from other applications
		// that are not deployed on netlify set headers in serverless functions as bellow
		
		// headers:{
		// 	'Access-Control-Allow-Origin':'*'
		// },
		statusCode:200,
		body:JSON.stringify(items)
	}
}