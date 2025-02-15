const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

// toggle menu in small view
const mainNav = document.querySelector('.navigation');
const navbutton = document.querySelector('#menu');

navbutton.addEventListener('click', () => {
  mainNav.classList.toggle('show');
  navbutton.classList.toggle('show');
});

//Products
const products = [
    {
        name: "BambooBrush",
        category: "Personal Care",
        price: 5.99,
        imageUrl: "https://www.biome.com.au/cdn/shop/files/Brightwooddetangle_2.webp?v=1722232128&width=1080"
    },
    {
        name: "SolidShampoo",
        category: "Personal Care",
        price: 8.50,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNmPOS7_mELqMTTcl0EOwqgpVeOcGVns79nQ&s"
    },
    {
        name: "EcoDeo",
        category: "Personal Care",
        price: 6.99,
        imageUrl:"https://ecoorigin.co.uk/cdn/shop/files/Orange-_-Patchouli-Natural-Deodorant-Stick-898021-833876-526038-348491_f6466ee1-1c82-43a3-abc1-920ecde4a3c3_large.webp?v=1718030337"
    },
    {
        name: "CottonPads",
        category: "Personal Care",
        price: 4.99,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_FP0jiymal2Hw6LY3FMCDkAG6Z3n3CYeDA&s"
    },
    {
        name: "WoodComb",
        category: "Personal Care",
        price: 7.99,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbrBaM1pACR8GsC9WIwcfDOZ1tdWXMtPZ-5w&s"
    },
    {
        name: "ReusableBottle",
        category: "Sustainable Home",
        price: 12.99,
        imageUrl:"https://jococups.com/wp-content/uploads/sites/7/2019/09/3-Reusable-Glass-Water-Bottles.jpg"
    },
    {
        name: "EcoSponge",
        category: "Sustainable Home",
        price: 3.50,
        imageUrl:"https://goforzero.com.au/cdn/shop/files/eco-sponge-2pack_1_600x.png?v=1708989603"
    },
    {
        name: "GlassJar",
        category: "Sustainable Home",
        price: 9.99,
        imageUrl:"https://www.ikea.com/us/en/images/products/korken-jar-with-lid-clear-glass__0713741_pe729737_s5.jpg?f=s"
    },
    {
        name: "BeeswaxWrap",
        category: "Sustainable Home",
        price: 7.99,
        imageUrl:"https://s.alicdn.com/@sc04/kf/H427ade0a3cc24d26bcc58a9e24409f592.jpg_720x720q50.jpg"
    },
    {
        name: "CompostBin",
        category: "Sustainable Home",
        price: 24.99,
        imageUrl:"https://www.freeflush.co.uk/cdn/shop/products/1_1a5546bf-77f7-40c9-8b7f-5d6db7bb69bc_800x.jpg?v=1611673366"
    },
    {
        name: "OrganicTee",
        category: "Eco-Friendly Fashion",
        price: 19.99,
        imageUrl:"https://watchwear.eu/wp-content/uploads/2022/12/CS-Tee-Seaweed-Green-585x744.jpg"
    },
    {
        name: "EcoBag",
        category: "Eco-Friendly Fashion",
        price: 14.99,
        imageUrl:"https://rosa.ua/11620-tm_home_default/set-ecobag-coloring-ukraine-cotton-220-gsm-38x42-cm-rosa-talent.jpg"
    },
    {
        name: "BambooSocks",
        category: "Eco-Friendly Fashion",
        price: 9.99,
        imageUrl:"https://bamboosports.us/cdn/shop/products/bamboo-sports-socks-quarter-high-bamboo-socks-14865086677047_1080x.jpg?v=1662846677"
    },
    {
        name: "RecycledJeans",
        category: "Eco-Friendly Fashion",
        price: 49.99,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4KCNIuei3-RyO1DBSTRAsEGsUDQcgHAE58w&s"
    },
    {
        name: "CorkWallet",
        category: "Eco-Friendly Fashion",
        price: 22.99,
        imageUrl:"https://earthhero.com/cdn/shop/products/Tiradia-Just-Enough-Cork-Wallet-1.jpg?v=1694075353&width=1024"
    },
    {
        name: "EcoSnacks",
        category: "Sustainable Food",
        price: 5.99,
        imageUrl:"https://img.ankorstore.com/products/images/2003858-47d65da924dfd3.jpg?auto=format%2Ccompress&fm=pjpg&dpr=2&h=200&w=200&fit=crop&crop=faces"
    },
    {
        name: "ReusableStraw",
        category: "Sustainable Food",
        price: 3.99,
        imageUrl:"https://www.aeropress.co.uk/cdn/shop/files/straw-ice-blue.jpg?v=1700747956&width=640"
    },
    {
        name: "BambooCutlery",
        category: "Sustainable Food",
        price: 8.99,
        imageUrl:"https://www.coopersofstortford.co.uk/images/products/medium/XJY2i_1.jpg"
    },
    {
        name: "GlassStraw",
        category: "Sustainable Food",
        price: 6.99,
        imageUrl:"https://media-production.procook.io/3c75c60e070074f4821bcb4d9391a090.jpg"
    },
    {
        name: "ClothDiapers",
        category: "Baby Care",
        price: 29.99,
        imageUrl:"https://m.media-amazon.com/images/I/71pheNFAw1L._AC_UF894,1000_QL80_.jpg"
    },
    {
        name: "OrganicOnesie",
        category: "Baby Care",
        price: 18.99,
        imageUrl:"https://piccolinyshop.com/cdn/shop/files/onesie_picklebagel.png?v=1732589618"
    },
    {
        name: "WoodenToys",
        category: "Baby Care",
        price: 14.99,
        imageUrl:"https://www.anticcolonial.com/wp-content/naturelovers/uploads/2017/04/juguete-madera.jpg"
    },
    {
        name: "EcoWipes",
        category: "Baby Care",
        price: 7.99,
        imageUrl:"https://lh3.googleusercontent.com/pw/AM-JKLXykoKoPhgpQQNZygtLBPgRi6BsEonzBJ2r9nDGdtVDDjuM35qdYFGxEaXPBuFxXpZFc5_ZDgSC8tQx_ZeyQjLSgjiqBEEI15rtDrMDmPRpQuxyPVAaGbz1RGebdt0H63kUzMcMwnQ8dhmwdEu-7y7H=s969-no"
    },
    {
        name: "BambooBib",
        category: "Baby Care",
        price: 9.99,
        imageUrl:"https://bamboolittle.com/cdn/shop/products/baby-bib-drooling-teething-feeding-bamboo-little-4-sw_18500450-b73e-46cb-8a87-de3ba62c78e2.jpg?v=1678770383&width=533"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const productSelect = document.getElementById('product');
    const allProductsContainer = document.querySelector(".productList");

    if (productSelect) {
        const categories = new Set(["All"]);
        products.forEach(product => {
            categories.add(product.category); 
        });
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            productSelect.appendChild(option);
        });
        productSelect.addEventListener("change", function () {
            filterProductsByCategory();
        });
    }

    if (allProductsContainer) {
        displayProducts(products, allProductsContainer);
    }
});

function displayProducts(filteredProducts, container) {
    container.innerHTML = "";
    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        const image = document.createElement("img");
        image.src = product.imageUrl;
        image.alt = product.name;
        image.loading = "lazy";
        image.style.width = "10vh";
        image.style.height = "10vh";
        image.style.aspectRatio = "16/9";

        const name = document.createElement("h3");
        name.innerHTML = product.name;
        const category = document.createElement("p");
        category.innerHTML = product.category;
        const price = document.createElement("p");
        price.innerHTML = `<span class="label">$ </span>${product.price}`;
        const button = document.createElement("button");
        button.innerHTML = "Add";
        button.className = "addBtn";


        button.addEventListener("click", () => {
            alert(`${product.name} added to cart!`);
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            
        });

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(category);
        card.appendChild(price);
        card.appendChild(button);
        container.appendChild(card);
    });
}

function filterProductsByCategory() {
    const productSelect = document.getElementById("product");
    const allProductsContainer = document.querySelector(".productList");

    const selectedCategory = productSelect.value;
    const filteredProducts = selectedCategory === "All" ? products : products.filter(product => product.category === selectedCategory);
    displayProducts(filteredProducts, allProductsContainer);
}

function displayRandomProducts() {
    const randomProductsContainer = document.querySelector(".productOverview");
    
    if (randomProductsContainer) {
        const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
        const selectedProducts = shuffledProducts.slice(0, 3);
        displayProducts(selectedProducts, randomProductsContainer);
    }
}

if (document.querySelector(".productOverview")) {
    displayRandomProducts();
}

function showCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartWindow = document.createElement("div");
    cartWindow.className = "cartWindow";

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "Close";
    closeButton.className = "closeBtn";
    closeButton.addEventListener("click", () => {
        document.body.removeChild(cartWindow);
    });

    const clearButton = document.createElement("button");
    clearButton.innerHTML = "Clear";
    clearButton.className = "clearBtn";
    clearButton.addEventListener("click", () => {
        localStorage.removeItem('cart');
        document.body.removeChild(cartWindow);
        showCart();
    });
    cartWindow.appendChild(clearButton);
    cartWindow.appendChild(closeButton);

    if (cart.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.innerHTML = "Your cart is empty.";
        cartWindow.appendChild(emptyMessage);
    } else {
        cart.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.className = "cartItem";

            const name = document.createElement("h4");
            name.innerHTML = product.name;
            const price = document.createElement("p");
            price.innerHTML = `<span class="label">$ </span>${product.price}`;

            productDiv.appendChild(name);
            productDiv.appendChild(price);
            cartWindow.appendChild(productDiv);
        });
    }

    document.body.appendChild(cartWindow);
}



const cartButton = document.createElement("button");
cartButton.innerHTML = "View Cart";
cartButton.className = "cartBtn";
cartButton.style.position = "fixed";
cartButton.style.bottom = "20px";
cartButton.style.right = "20px";
cartButton.style.zIndex = "1000";
cartButton.addEventListener("click", showCart);

document.body.appendChild(cartButton);

