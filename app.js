const express = require('express');
const app = express();
const port = 3000;

// Sample product catalog data
const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
  { id: 2, name: 'Smartphone', category: 'Electronics', price: 500 },
  { id: 3, name: 'Shoes', category: 'Fashion', price: 100 },
];

// Serve static files (HTML, CSS, etc.) from the 'public' directory
app.use(express.static('public'));

// API endpoint: Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// API endpoint: Get product by ID
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
