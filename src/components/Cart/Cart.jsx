import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';
import { Button, Empty } from 'antd';
import { DeleteOutlined } from "@ant-design/icons";
import Orderservice from '../../services/OrderService';

const Cart = () => {
    const { cart, clearCart } = useContext(ProductContext);

    if (cart.length < 1) {
        return <Empty description="The cart is empty" />;
    }

    const handleCreateOrder = async () => {
        try {
            const response = await Orderservice.createOrder(cart);
            console.log("Order created successfully:", response.data);
            clearCart(); 
        } catch (error) {
            console.error("Error creating order:", error.response?.data || error.message);
        }
    };

    return (
        <div>
            {cart.map(product => (
                <div key={product.id}>
                    <p>Product name: {product.name} Price: {product.price} € Quantity: {product.quantity}</p>
                </div>
            ))}
            <Button onClick={clearCart}>
                Clear cart <DeleteOutlined />
            </Button>
            <Button onClick={handleCreateOrder}>Create order</Button>
        </div>
    );
};

export default Cart;
