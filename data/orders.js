export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order){
    //unshift will add the order to the beginning of the orders array so that we have the latest order first
    orders.unshift(order);
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}