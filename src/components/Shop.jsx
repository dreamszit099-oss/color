import React from 'react';
import './Shop.css';

const Shop = () => {
    const categories = ['Electronics', 'Books', 'Clothing', 'Home'];
    const products = [
        { id: 1, name: 'Smartphone', category: 'Electronics', price: 599, img: 'smartphone.jpg' },
        { id: 2, name: 'Laptop', category: 'Electronics', price: 999, img: 'laptop.jpg' },
        { id: 3, name: 'Book Title', category: 'Books', price: 29, img: 'book.jpg' },
        { id: 4, name: 'T-Shirt', category: 'Clothing', price: 19, img: 'tshirt.jpg' },
    ];

    const [selectedCategory, setSelectedCategory] = React.useState('All');

    const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);

    return (
        <div className="shop">
            <h1>Product Listing</h1>
            <div className="filters">
                <h2>Categories</h2>
                {categories.map((category) => (
                    <button key={category} onClick={() => setSelectedCategory(category)}>{category}</button>
                ))}
                <button onClick={() => setSelectedCategory('All')}>All</button>
            </div>
            <div className="product-cards">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.img} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;