
const BaseAPI = 'http://localhost:8080/api';

export const fetchProducts = async () => {
  const response = await fetch(`${BaseAPI}/product`);
  return await response.json();
};

export const fetchProductById = async (id) => {
  const response = await fetch(`${BaseAPI}/product/${id}`);
  return await response.json();
};

export const fetchCart = async (id) => {
  const response = await fetch(`${BaseAPI}/cart`);
  return await response.json();
};

export const addToCart = async (productId) => {
  const response = await fetch('http://localhost:8080/api/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_id: "66ac4164f3019b74041efea1", product_id: productId, qty: 1 }),
  });
  return await response.json();
};