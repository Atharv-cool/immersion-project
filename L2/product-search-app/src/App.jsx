import { useState, useEffect } from "react";

import ProductList from "./ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setError("Search input cannot be empty");
      return;
    }
    setError("");
    fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error("Error searching products:", err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Search</h1>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search products..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} style={{ marginLeft: "30px" }}>
        Search
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ProductList products={products} />
    </div>
  );
}

export default App;
