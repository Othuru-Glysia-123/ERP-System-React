import React, { useState } from 'react';
import './ProductsManagement.scss';

const ProductsManagement = () => {
  const [products, setProducts] = useState([
    { id: 2134, name: 'Acer Laptop 16 KL-4804', category: 'Electronics', price: 599.99, stockQuantity: 25 },
    { id: 1654, name: 'Dell Laptop KR211822', category: 'Electronics', price: 499.99, stockQuantity: 60 },
    { id: 1845, name: 'Rode Podcast Microphone', category: 'Electronics', price: 199.49, stockQuantity: 45 },
    { id: 1534, name: 'Playstation 5 Digital Edition', category: 'Electronics', price: 250.99, stockQuantity: 84 },
    { id: 2506, name: 'Logitech MX Master 3', category: 'Electronics', price: 59.49, stockQuantity: 67 },
    { id: 8501, name: 'Toshiba Split AC 2', category: 'Electronics', price: 899.99, stockQuantity: 34 },
  ]);

  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    category: '',
    price: 0,
    stockQuantity: 0,
  });

  const [editingProductId, setEditingProductId] = useState(null);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const addProduct = () => {
    if (editingProductId !== null) {
      // Editing existing product
      setProducts(products.map((product) => (product.id === editingProductId ? newProduct : product)));
      setEditingProductId(null);
    } else {
      // Adding new product
      setProducts([...products, newProduct]);
    }

    setNewProduct({
      id: '',
      name: '',
      category: '',
      price: 0,
      stockQuantity: 0,
    });
  };

  const editProduct = (id) => {
    const selectedProduct = products.find((product) => product.id === id);
    setNewProduct(selectedProduct);
    setEditingProductId(id);
  };

  const clearForm = () => {
    setNewProduct({
      id: '',
      name: '',
      category: '',
      price: 0,
      stockQuantity: 0,
    });
    setEditingProductId(null);
  };

  return (
    <div className="container">
      <div className="bg-white">
        <h1 className="title">Products Management</h1>

        {/* Product Table */}
        <table className="product-table">
          <thead>
            <tr className="table-header">
              <th>Product ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock Quantity</th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.stockQuantity}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => editProduct(product.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add/Edit Product Form */}
        <div className="form-container">
          <h3 className="form-title">
            {editingProductId !== null ? 'Edit Product' : 'Add New Product'}
          </h3>
          <form>
            <div className="form-grid">
              <div>
                <label className="form-label">Product ID</label>
                <input
                  type="text"
                  className="form-input"
                  value={newProduct.id}
                  onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
                  disabled={editingProductId !== null}
                />
              </div>
              <div>
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
              </div>
              <div>
                <label className="form-label">Category</label>
                <input
                  type="text"
                  className="form-input"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                />
              </div>
              <div>
                <label className="form-label">Price</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-input"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                />
              </div>
              <div>
                <label className="form-label">Stock Quantity</label>
                <input
                  type="number"
                  className="form-input"
                  value={newProduct.stockQuantity}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, stockQuantity: parseInt(e.target.value) })
                  }
                />
              </div>
            </div>
            <div className="form-actions">
              <button
                type="button"
                className="add-button"
                onClick={addProduct}
              >
                {editingProductId !== null ? 'Update Product' : 'Add Product'}
              </button>
              <button
                type="button"
                className="clear-button"
                onClick={clearForm}
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductsManagement;
