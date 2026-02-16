function removeActiveClass() {
    const activeButtons = document.getElementsByClassName("active");
    for (let btn of activeButtons) {
        btn.classList.remove("active");
    }
}

document.getElementById("products").addEventListener("click", function () {
    window.location.href = "./products.html";
});


// 1️⃣ Load Categories
const loadCategory = async () => {

    const response = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await response.json();

    displayCategories(categories);
};


// 2️⃣ Display Category Buttons
const displayCategories = (categories) => {

    const categoriesContainer = document.getElementById("category-container");
    categoriesContainer.innerHTML = "";

    const allButton = document.createElement("button");
    allButton.innerText = "All";
    allButton.className =
        "btn mr-2 rounded-2xl text-blue-700 hover:bg-[#422AD5] hover:text-white";

    allButton.addEventListener("click", () => {
        loadProductsByCategory("all");
    });

    categoriesContainer.appendChild(allButton);

    categories.forEach((category) => {

        const button = document.createElement("button");

        button.innerText = category;
        button.className =
            "btn mr-2 rounded-2xl text-blue-700 hover:bg-[#422AD5] hover:text-white";

        button.addEventListener("click", () => {
            loadProductsByCategory(category);
        });

        categoriesContainer.appendChild(button);
    });
};


// 3️⃣ Load Products By Category
const loadProductsByCategory = async (category = "all") => {

    document.getElementById("products-container").className = "md:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6";

    const url =
        category === "all"
            ? "https://fakestoreapi.com/products"
            : `https://fakestoreapi.com/products/category/${category}`;

    const response = await fetch(url);
    const data = await response.json();

    displayProducts(data);
};



// 4️⃣ Display Products
const displayProducts = (products) => {

    const container = document.getElementById("products-container");
    container.innerHTML = "";

    products.forEach((product) => {

        const card = document.createElement("div");

        card.innerHTML = `
            <div class="bg-white gap-3 rounded shadow flex flex-col h-full mx-auto ">
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
        `;

        container.appendChild(card);
    });
};


// Load Everything Initially
loadCategory();
loadProductsByCategory("all");