import React, {useContext, useEffect} from 'react';
import ProductTableRow from "./ProductTableRow";
import { ProductContext } from "../context/ProductContext";
import { getProducts } from "../services/ApiService.js"
import {NavLink} from "react-router-dom";

export default function ProductList() {

  const { products, updateProducts } = useContext(ProductContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await getProducts();
        updateProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchData();
  }, []);

  return(
    <div>
      <table className="table table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        {products.map(product => <ProductTableRow key={product.id} {...product} />)}
        </tbody>
      </table>
      <div>
        <NavLink className="btn btn-primary" to="/new">Add</NavLink>
      </div>
    </div>

  );

}