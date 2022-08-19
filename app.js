const products = document.querySelector("#products")

const product_0 = new Products("img/product_0.png", "32$", "Yazlık Gömlek");
const product_1 = new Products("img/product_1.png", "27$", "Kısa Kollu Tişört");
const product_2 = new Products("img/product_2.png", "47$", "Afilli Kot Gömlek");

const product_3 = new Products("img/product_3.png", "36$", "Askeri Yeşil Tişört");

const product_4 = new Products("img/bag_1.png", "67$", "Mavi Çanta");
const product_5 = new Products("img/bag_2.png", "54$", "Kahverengi Çanta");
const product_6 = new Products("img/bag_3.png", "54$", "Siyah Çanta");
const productsList = [
    product_0, product_1, product_2, product_3,product_4,product_5,product_6

 
];

productsList.forEach(function(element){
    products.innerHTML += `
            <div class="product">
                <img src="${element.image}" alt="" srcset="">
                <div class="p-details">
                    <h2>${element.title}</h2>
                    <p>${element.price}</p>
                </div>
            </div>`
})

const search_bar = document.querySelector("#search-bar");
search_bar.addEventListener("keyup",searchProduct)

function searchProduct(element){
    value = element.target.value.toLowerCase();
    let list = document.querySelectorAll(".product")
    list.forEach(e =>{
        text = e.textContent.toLowerCase();
        console.log(e)
        if (text.indexOf(value) === -1) {
            e.setAttribute("style", "display:none !important")
        }
        else
            e.setAttribute("style", "display:block")
    })
}