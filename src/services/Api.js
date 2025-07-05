import axios from 'axios';

const client = axios.create ({
    baseURL: "https://grocery-store-api-tn34.onrender.com" 
})

export async function getProducts(){
    const data = await client("/products");
    return data.data;
}

export async function getProduct(id){
    const data = await client(`/products/${id}`);
    return data.data;
}