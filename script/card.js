
function removeActiveClass() {
    const activeButtons = document.getElementsByClassName("active");

    for (let btn of activeButtons) {
        btn.classList.remove("active");
    }
}


document.getElementById("products").addEventListener("click",
    function () {
        window.location.href = "./products.html"
    })


const loadCategory = async () => {

    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    const categories = data.map(product => product.category);
    const uniqueCategories = [...new Set(categories)];

    displayCategories(uniqueCategories);
}

const displayCategories = (categories) => {

    const categoriesContainer = document.getElementById("category-container");
    categoriesContainer.innerHTML = "";

    categories.forEach((category) => {
        const div = document.createElement("div");
        const button = document.createElement("button");

        button.id = `category-btn-${category}`;
        button.onclick = () => loadProductsByCategory(category);
        button.className = "btn rounded-2xl border-black-700 text-blue-700 hover:bg-[#422AD5] hover:text-white";

        div.appendChild(button);
        categoriesContainer.appendChild(div);
    });
}

const loadProductsByCategory = async (category) => {

    document.getElementById("products-container").style.display = "grid";

    // makeHide("status");
    // show("spiner");

    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await response.json();

    // if (data) {
    //     displayProducts(data);
    //     makeHide("spiner");
    // }

    // removeActiveClass();

    const clickedButton = document.getElementById(`category-btn-${category}`);
    // clickedButton.classList.add("active");
};

const displayProducts = (products) => {

    // if (products.length < 1) {
    //     makeHide("products-container");
    //     show("status");
    //     return;
    // }

    const container = document.getElementById("products-container");
    container.innerHTML = "";

    products.forEach((product) => {

        const card = document.createElement("div");

        card.innerHTML = `
            <div class="bg-white p-5 rounded shadow">
                <img src="${product.image}" class="h-40 mx-auto object-contain">
                <h3 class="font-bold mt-3">${product.title}</h3>
                <p class="text-gray-600">$${product.price}</p>
            </div>
        `;

        container.appendChild(card);
    });
};

// categories.forEach((category) => {

//     const div = document.createElement("div");
//     const button = document.createElement("button");

//     button.innerText = category;
//     button.className = "btn rounded-2xl border-black-700 text-blue-700 hover:bg-[#422AD5] hover:text-white";

//     button.addEventListener("click", async () => {

//         const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
//         const data = await response.json();

//         displayProducts(data);
//     });

//     div.appendChild(button);
//     categoriesContainer.appendChild(div);
// });





const makeHide = (id) => {
    document.getElementById(id).style.display = "none";
}

const show = (id) => {
    document.getElementById(id).style.display = "block";
}


loadCategory();
loadProductsByCategory()

card.innerHTML = `
            <div class="bg-white p-5 rounded shadow flex flex-col h-full mx-auto">
                <img class="bg-slate-400" src="${product.image}" class=" mx-auto object-contain">
                <div class="flex justify-between">
                    <h3 class="p-1 text-xs bg-purple-200 rounded-xl">${product.category}</h3>
                    <div class="flex items-center">
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <h3 class="p-1 text-xs  rounded-xl">${product.rating.rate}</h3>
                    <h3 class="p-1 text-xs  rounded-xl">(${product.rating.count})</h3>
                    </div>
                </div>
                <h3 class="font-bold mt-3 line-clamp-2">${product.title}</h3>
                <p class="text-gray-600 font-semibold">$${product.price}</p>
                <div class="flex justify-between">
                <button class="flex justify-center items-center gap-1 px-5 rounded-xl border border-purple-500 hover:bg-purple-500  hover:text-white transition-colors"><i class="fa-regular fa-eye"></i> Details</button>
                <button class="flex justify-center items-center gap-1 px-5  rounded-xl border bg-indigo-400 border-purple-500 hover:bg-purple-500  hover:text-white transition-colors"><i class="fa-regular fa-eye"></i> Details</button>
                </div>
            </div>
        `;