
const loadTopProducts = async() => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    const sortedProducts = products.sort((a, b) => 
        b.rating.rate - a.rating.rate
    );

    const topThree = sortedProducts.slice(0, 3);

    displayTopProducts(topThree);
}

const displayTopProducts = (products) => {
   const topContainer =document.getElementById("Top-3-card-container");
   topContainer.innerHTML="";

   products.forEach((product)=> {
    console.log(product)
    const card = document.createElement("div");

    card.innerHTML=`
    <div class="bg-white gap-3 rounded-xl shadow flex flex-col h-full mx-auto ">
                <div class="bg-gray-300">
                <img src="${product.image}" class=" h-44 w-full p-3 object-contain ">
                </div>
                <div class="p-3">
                    <div class="flex justify-between">
                    <h3 class="p-1 text-xs bg-purple-200 rounded-xl">${product.category}</h3>
                    <div class="flex items-center">
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <h3 class="p-1 text-xs  rounded-xl">${product.rating.rate}</h3>
                    <h3 class="p-1 text-xs  rounded-xl">(${product.rating.count})</h3>
                    </div>
                </div>
                <div class="my-auto">
                <h3 class="font-bold mt-3 line-clamp-2">${product.title}</h3>
                <p class="text-gray-600 font-semibold">$${product.price}</p>
                </div>
                <div class="flex justify-between ">
                <button class="flex justify-center items-center gap-1 px-5 rounded-lg border border-purple-500 hover:bg-purple-500  hover:text-white transition-colors"><i class="fa-regular fa-eye"></i> Details</button>
                <button class="flex justify-center items-center gap-1 px-5  rounded-lg border bg-indigo-400 border-purple-500 hover:bg-purple-500  hover:text-white transition-colors"><i class="fa-solid fa-cart-arrow-down"></i> Details</button>
                </div>
                </div>
            </div>
    `
    topContainer.appendChild(card);
   });

};

loadTopProducts();