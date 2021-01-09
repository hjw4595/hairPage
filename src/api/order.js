import axios from "../axios";

export const postOrder = (designer, end, start, phone, menuId) => axios.post(`/order`, {
    "reservationEnd": end,    
    "reservationStart": start,
    "memberPhoneNumber": phone,
    "designerName":designer,
    "menuName": menuId,
});

export const putPayment = (cash , pay , id) => axios.get(`/order/payment`, {
    "CASH" : cash,
    "payment" : pay,
    "order_id" : id
});

export const putOrderTime = ( end, start, id) => axios.post(`/order/time`, {
    "reservationEnd": end,    
    "reservationStart": start,
    "id": id,
});

export const putSearch = (start , end) => axios.get(`/week`, {
    "from" : start,
    "to" : end,
});
