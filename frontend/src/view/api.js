
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
  const response = await fetch(`${BaseAPI}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_id: "66ac4164f3019b74041efea1", product_id: productId, qty: 1 }),
  });
  return await response.json();
};

export const addProduct = async (productData) => {
  const response = await fetch(`${BaseAPI}/product`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...productData }),
  });
  return await response.json();
};

export const updateProduct = async (productId, productData) => {
  const response = await fetch(`${BaseAPI}/product/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...productData }),
  });
  return await response.json();
};
export const deleteFromCart = async (cartItemId) => {
  const response = await fetch(`${BaseAPI}/cart/${cartItemId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};

export const deleteProduct = async (productItemId) => {
  const response = await fetch(`${BaseAPI}/product/${productItemId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};

export const fetchCategories = async () => {
  const response = await fetch(`${BaseAPI}/category`);
  return await response.json();
};

export const fetchCategoryById = async (id) => {
  const response = await fetch(`${BaseAPI}/category/${id}`);
  return await response.json();
};

export const addCategory = async (categoryData) => {
  const response = await fetch(`${BaseAPI}/category`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...categoryData }),
  });
  return await response.json();
};

export const updateCategory = async (categoryId, categoryData) => {
  const response = await fetch(`${BaseAPI}/category/${categoryId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...categoryData }),
  });
  return await response.json();
};

export const deleteCategory = async (categoryItemId) => {
  const response = await fetch(`${BaseAPI}/category/${categoryItemId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};

