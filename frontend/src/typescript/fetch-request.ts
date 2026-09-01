type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  ingredients: string[];
  weight: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  price: number;
  image: string;
};

type ProductsResponse = {
  products: Product[];
};

const menuItems = document.querySelector("#menuItems");
console.log("Menu:", menuItems);

if (!menuItems) {
  throw new Error("Menu container not found");
}

fetch("http://localhost:3000/products")
  .then((res: Response) => {
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    return res.json();
  })
  .then((data: Product[]) => {
    data.forEach((product) => {
      const card = document.createElement("article");

      card.classList.add("menu__card");

      card.innerHTML = `
        <span class="menu__card-info">
          <a href="/pages/card-info.html?id=${product.id}">
            <i class="fa-solid fa-circle-info"></i>
          </a>
        </span>

        <img
          class="menu__card-image"
          src="${product.image}"
          alt="${product.name}"
        />

        <div class="menu__card-content">
          <h3 class="menu__card-title">${product.name}</h3>

          <div class="menu__card-macros">
            <div class="menu__card-macro">
              <span class="menu__card-macro-label">kcal</span>
              <span class="menu__card-macro-value">${product.calories}</span>
            </div>

            <div class="menu__card-macro">
              <span class="menu__card-macro-label">protein</span>
              <span class="menu__card-macro-value">${product.protein}g</span>
            </div>

            <div class="menu__card-macro">
              <span class="menu__card-macro-label">fat</span>
              <span class="menu__card-macro-value">${product.fat}g</span>
            </div>

            <div class="menu__card-macro">
              <span class="menu__card-macro-label">carbs</span>
              <span class="menu__card-macro-value">${product.carbs}g</span>
            </div>
          </div>

          <div class="menu__card-footer">
            <span class="menu__card-price">${product.price} NOK</span>
            <button class="menu__card-button" type="button">
              Add
            </button>
          </div>
        </div>
      `;

      menuItems.appendChild(card);
    });
  })
  .catch((error: Error) => {
    console.error("Error fetching products:", error);
  });
