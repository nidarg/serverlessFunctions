const result = document.querySelector('.result')

const fetchProduct = async()=>{
    result.innerHTML = `<h2> Loading...</h2>`
    try {
        const id = window.location.search // this returns ?id = ...
        const{data:{fields}} = await axios.get(`/api/3-product${id}`)
        // console.log(data)
        const{name,description,price,image} = fields

        result.innerHTML = `<h1 class="title">${name}</h1>
        <article class="product">
          <img class="product-img"
          src="${image[0].url}"
          alt="${name}"
          />
          <div class="product-info">
            <h5 class="title">${name}</h5>
            <h5 class="price">$ ${price}</h5>
            <p class="desc">${description}</p>
          </div>
        </article>`

    } catch (error) {
        result.innerHTML = `<h2>${error.response.data}</h2>`
    }
    const{data} = await axios.get('')
}

fetchProduct()