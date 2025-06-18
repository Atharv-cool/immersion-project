import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import "./App.css"; 

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [sortOrder, setSortOrder] = useState(""); 

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setError("Search input cannot be empty");
      return;
    }
    setError("");
    fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error searching products:", err));
  };

  
  const handleSort = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    const sortedProducts = [...products].sort((a, b) => {
      return order === "highToLow" ? b.price - a.price : a.price - b.price;
    });

    setProducts(sortedProducts);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="hover-underline">Product Search</h1>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search products..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} style={{ marginLeft: "30px" }}>
        Search
      </button>

      <select value={sortOrder} onChange={handleSort} style={{ marginLeft: "20px" }}>
        <option value="">Sort by Price</option>
        <option value="highToLow">High to Low</option>
        <option value="lowToHigh">Low to High</option>
      </select>

      {error && <p style={{ color: "red" }}>{error}</p>}
      <ProductList products={products} />
    </div>
  );
}

export default App;
