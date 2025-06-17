function ProductList({ products }) {
    return (
      <div>
        {products.length === 0 && <p>No products found.</p>}
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              margin: "50px 0",
              padding: "10px",
              borderRadius: "15px",
            }}
          >
            <h2>{product.title}</h2>
            <p><strong>Price:</strong> ${product.price}</p>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "250px" }}
            />
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductList;
  