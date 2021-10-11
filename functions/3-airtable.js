
const dotenv = require('dotenv')
dotenv.config()
const Airtable = require('airtable-node');
 
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY})
  .base('appmpZLw5DVHROp0O')
  .table('products')


exports.handler = async(event,context)=>{
    try {
        const {records} = await airtable.list()
        const products = records.map((record)=>{
            const{id,fields:{name,image,price}} = record
            const url = image[0].url
            return {id,name,price,url}
        })
        return{
            statusCode:200,
            body:JSON.stringify(products)
        }
       
    } catch (error) {
        return{
            statusCode:500,
            body:'Server Error'
        }
        
    }
    
}