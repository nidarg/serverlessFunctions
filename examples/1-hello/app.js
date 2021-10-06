const result = document.querySelector('.result')

const fetchData = async()=>{
	try{
		// const {data} = axios.get('/.netlify/functions/1-hello')
		const {data} = axios.get('/api/1-hello')
		result.textContent = data
	}catch(error){
		result.textContent = error.response.data
		console.log(error.response.data)
	}
}

fetchData()