import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
const Product = () => {
  // 4 - rota dinamica
  const { id } = useParams();

  // 5 - carregamento dado individual
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);

  console.log(product);
  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$: {product.price}</p>
          {/* 6 - nested router*/}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  );
};

export default Product;
