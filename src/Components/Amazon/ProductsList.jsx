import { products } from "../services/products";
import { ProductItems } from "./ProductItems";

export const ProductsList = () => {
  return (
    <div>
      <h1> This is my Product List</h1>
      {products.map((items) => (
        <ProductItems
          title={items.title}
          price={items.price}
          cat={items.cat}
          desc={items.desc}
          url={items.url}
        />
        ))}

    </div>
  );
};
