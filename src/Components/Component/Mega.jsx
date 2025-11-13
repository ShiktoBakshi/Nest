import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";
import ProductNav from "./ProductNav";

const ProductCard = () => {
  const products = useLoaderData();
  const [selectCategory, setSelectCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const filterCard =
    selectCategory === "All"
      ? products
      : products.filter((p) => p.category === selectCategory);

  return (
    <div className="w-11/12 mx-auto py-16">
      
      <div className="flex flex-col lg:flex-row  justify-between items-start lg:items-center gap-4 mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Popular Products
        </h1>

     
        <ProductNav
          categories={categories}
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </div>

     
      {filterCard.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filterCard.map((Card) => (
            <Cards Card={Card} key={Card.id} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500 text-lg">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
