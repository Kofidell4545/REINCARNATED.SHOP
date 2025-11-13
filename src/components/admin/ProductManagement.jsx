import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Save } from 'lucide-react';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    category: 'Apparel'
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    // Load from Shop component's hardcoded products for now
    // In production, this would come from a database
    const defaultProducts = [
      { id: 1, name: 'Reincarnated Cap', price: 350.00, image: '/cap.png', category: 'Apparel' },
      { id: 2, name: 'White ', price: 350.00, image: '/whiteShirt.jpeg', category: 'Apparel' },
      { id: 3, name: 'Black ', price: 350.00, image: '/blackShirt.jpeg', category: 'Apparel' },
      { id: 4, name: 'Cuffed Beanie', price: 150.00, image: '/Cujay.jpeg', category: 'Apparel' }
    ];
    
    const savedProducts = localStorage.getItem('products');
    setProducts(savedProducts ? JSON.parse(savedProducts) : defaultProducts);
  };

  const saveProducts = (updatedProducts) => {
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setFormData({ name: '', price: '', image: '', category: 'Apparel' });
    setIsFormOpen(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      image: product.image,
      category: product.category
    });
    setIsFormOpen(true);
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const updatedProducts = products.filter(p => p.id !== productId);
      saveProducts(updatedProducts);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingProduct) {
      // Update existing product
      const updatedProducts = products.map(p =>
        p.id === editingProduct.id
          ? { ...p, ...formData, price: parseFloat(formData.price) }
          : p
      );
      saveProducts(updatedProducts);
    } else {
      // Add new product
      const newProduct = {
        id: Date.now(),
        ...formData,
        price: parseFloat(formData.price)
      };
      saveProducts([...products, newProduct]);
    }
    
    setIsFormOpen(false);
    setFormData({ name: '', price: '', image: '', category: 'Apparel' });
  };

  return (
    <div>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#fff'
        }}>
          Product Management
        </h2>
        <button
          onClick={handleAddProduct}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#fff',
            color: '#000',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#fff'}
        >
          <Plus size={18} />
          Add Product
        </button>
      </div>

      {/* Products Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {products.map(product => (
          <div
            key={product.id}
            style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #333'
            }}
          >
            {/* Product Image */}
            <div style={{
              width: '100%',
              height: '250px',
              backgroundColor: '#2a2a2a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="color: #9ca3af; font-size: 0.875rem;">No Image</div>';
                }}
              />
            </div>

            {/* Product Info */}
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                fontSize: '0.75rem',
                color: '#9ca3af',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '0.5rem'
              }}>
                {product.category}
              </div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#fff',
                marginBottom: '0.75rem'
              }}>
                {product.name}
              </h3>
              <p style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#fff',
                marginBottom: '1rem'
              }}>
                GH₵ {product.price.toFixed(2)}
              </p>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => handleEditProduct(product)}
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    backgroundColor: '#3b82f6',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Edit2 size={14} />
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    backgroundColor: '#ef4444',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Form Modal */}
      {isFormOpen && (
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              zIndex: 1001,
              backdropFilter: 'blur(4px)'
            }}
            onClick={() => setIsFormOpen(false)}
          />
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#1a1a1a',
              borderRadius: '20px',
              padding: '2rem',
              maxWidth: '500px',
              width: '90%',
              zIndex: 1002
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h2>
              <button
                onClick={() => setIsFormOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Product Name */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  color: '#d1d5db',
                  fontSize: '0.875rem',
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter product name"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#fff'}
                  onBlur={(e) => e.target.style.borderColor = '#333'}
                />
              </div>

              {/* Price */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  color: '#d1d5db',
                  fontSize: '0.875rem',
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  Price (GH₵) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="0.00"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#fff'}
                  onBlur={(e) => e.target.style.borderColor = '#333'}
                />
              </div>

              {/* Image URL */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  color: '#d1d5db',
                  fontSize: '0.875rem',
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  Image URL *
                </label>
                <input
                  type="text"
                  required
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="/product-image.png"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#fff'}
                  onBlur={(e) => e.target.style.borderColor = '#333'}
                />
              </div>

              {/* Category */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  color: '#d1d5db',
                  fontSize: '0.875rem',
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#fff'}
                  onBlur={(e) => e.target.style.borderColor = '#333'}
                >
                  <option value="Apparel">Apparel</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: '#fff',
                  color: '#000',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f3f4f6';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#fff';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Save size={18} />
                {editingProduct ? 'Update Product' : 'Add Product'}
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductManagement;
