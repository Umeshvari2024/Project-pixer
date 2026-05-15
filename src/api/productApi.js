import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

// GET PRODUCTS
export const getProducts = async () => {

  try {

    const response = await axios.get(API_URL);

    return response.data;

  } catch (error) {

    console.log("GET API Error:", error);

    return [];

  }

};

// POST PRODUCT
export const addProductApi = async (productData) => {

  try {

    const response = await axios.post(API_URL, productData);

    return response.data;

  } catch (error) {

    console.log("POST API Error:", error);

  }

};