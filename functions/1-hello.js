//domain/.netlify/functions/1-hello


// this comes from netlify server which takes our function and execute it based on congig from netlify.toml file
exports.hanler = async(event, context)=>{
	return{
		statusCode:200,
		body:'First Netlify Function'
	}
}