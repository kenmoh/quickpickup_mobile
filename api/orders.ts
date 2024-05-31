import client from '@/api/client'

const endpoint = "/orders";
const getListings = async () => await client.get(`${endpoint}`);

const orderDetails = async(orderId: string) => await client.get(`${endpoint}/${orderId}`);


export default {
    getListings,
    orderDetails
}