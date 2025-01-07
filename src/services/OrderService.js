import axios from "axios";

const API_URL = "http://localhost:3000/orders/";

const createOrder = async (cart) => {
    const token = localStorage.getItem("token");

    // Extrae solo los IDs de los productos del carrito
    const productIds = cart.map(product => product.id);

    // Calcula el total del carrito
    const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

    const res = await axios.post(
        API_URL + "create",
        {
            ProductId: productIds,
            total, 
        },
        {
            headers: {
                Authorization: token,
            },
        }
    );

    return res;
};

const Orderservice = {
    createOrder,
};

export default Orderservice;
