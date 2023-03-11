export const OrdersService = {     // An object
    getPreviousOrders: (orders) => {
        return orders.filter((ord) => ord.isPaymentCompleted === true); //filter returns an array
    },
    getCard: (orders) => {
        return orders.filter((ord) => ord.isPaymentCompleted === false); //filter returns an array
    }
}

export const ProductService = {
    getProductByProductId: (productResponseBody, productId) => {
        return productResponseBody.find((prod) => {
            return prod.id === productId;
        });
    },
    fetchProducts : () => {
        return fetch("http://localhost:8000/products", {
            method: "GET",
        });
    }
}