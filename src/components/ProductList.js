import React from "react";
import { useFilterContext } from "../context/Filter_Context";
import GridView from "./GridView";
import ListView from "./ListView";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const { filter_products, grid_view } = useFilterContext();

  // Log current URL params for debugging
  console.log("Search Params:", {
    category: searchParams.get("category"),
    color: searchParams.get("color"),
    text: searchParams.get("text"),
  });

  return grid_view ? (
    <GridView products={filter_products} />
  ) : (
    <ListView products={filter_products} />
  );
};

export default ProductList;
