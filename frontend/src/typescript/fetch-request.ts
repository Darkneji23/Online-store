type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

fetch("http://localhost:3000/products")
  .then((res: Response) => res.json())
  .then((data: Product[]) => {
    console.log(data);
  })
  .catch((error: Error) => {
    console.error("Error fetching products:", error);
  });
