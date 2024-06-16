const apexProducts = require('./products.js');
// console.log(apexProducts);
function searchProduct(productName){
    let result ={
        price: null,
        category: null
    }
    apexProducts.forEach(product =>{
        if (product.name === productName){
            result.price = product.price;
            result.category = product.category;
            return
        }
    })
    return result
}

const productInfo = searchProduct("Mythic Shards");
console.log(productInfo);