fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
    console.log(data);
})
    .catch((error) => {
    console.error("Error fetching products:", error);
});
export {};
//# sourceMappingURL=fetch-request.js.map