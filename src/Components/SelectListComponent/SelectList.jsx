import React, { useState } from 'react';
import './SelectList.css';

import img from '../../assest/women watch.jpg';

const mockProducts = [
  {
    id: 1,
    brand: 'Apple',
    name: 'Apple iPhone 15 Plus (Black, 128 GB)',
    price: 74900,
    oldPrice: 79900,
    rating: 4.6,
    image: img,
  },
  {
    id: 2,
    brand: 'Motorola',
    name: 'Motorola g45 5G (Blue, 128 GB)',
    price: 9999,
    oldPrice: 12999,
    rating: 4.3,
    image: img,
  },
  {
    id: 3,
    brand: 'Apple',
    name: 'Apple iPhone 14 (Blue, 128 GB)',
    price: 68900,
    oldPrice: 74900,
    rating: 4.5,
    image: img,
  },
  {
    id: 4,
    brand: 'Samsung',
    name: 'Samsung Galaxy S23 (Green, 256 GB)',
    price: 79999,
    oldPrice: 84999,
    rating: 4.7,
    image: img,
  },
  {
    id: 5,
    brand: 'Google',
    name: 'Google Pixel 7 (Black, 128 GB)',
    price: 59999,
    oldPrice: 69999,
    rating: 4.4,
    image: img,
  },
  {
    id: 6,
    brand: 'Vivo',
    name: 'Vivo V27 Pro (Magic Blue, 256 GB)',
    price: 37999,
    oldPrice: 40999,
    rating: 4.3,
    image: img,
  },
  {
    id: 7,
    brand: 'Oppo',
    name: 'Oppo Reno10 Pro+ (Purple, 256 GB)',
    price: 49999,
    oldPrice: 54999,
    rating: 4.5,
    image: img,
  },
];

const brands = ['Apple', 'Samsung', 'Google', 'Motorola', 'Vivo', 'Oppo'];

const SelectList = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = mockProducts.filter(
    (p) =>
      p.price >= priceRange[0] &&
      p.price <= priceRange[1] &&
      (selectedBrands.length === 0 || selectedBrands.includes(p.brand))
  );

  return (
    <>
    <h1 className='selectlistheading'>Collections</h1>
    <div className="shop-container">
        
      <aside className="filters">
        <h4>PRICE</h4>
        <input
          type="range"
          min={0}
          max={100000}
          step={1000}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
        />
        <div>₹0 - ₹{priceRange[1]}</div>

        <h4 className='my-3'>BRAND</h4>
        <div className='listcontainer'>
        {brands.map((brand) => (
          <div key={brand} className='my-2'>
            <label>
              <input
                type="checkbox"
                onChange={() => toggleBrand(brand)}
                checked={selectedBrands.includes(brand)}
                className='mx-3'
              />
              {brand}
            </label>
          </div>
        ))}
        </div>
      </aside>

      <main className="product-list">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="price">
              ₹{product.price.toLocaleString()}{' '}
              <span className="old">₹{product.oldPrice.toLocaleString()}</span>
            </div>
            <div className="rating">⭐ {product.rating}</div>
            <button className='btn border mt-2'>More Details</button>
          </div>
        ))}
      </main>
    </div>
    </>
  );
};

export default SelectList;
