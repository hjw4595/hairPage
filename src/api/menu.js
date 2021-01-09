import axios from "../axios";

export const postMenu = (id ,name) => axios.post(`/menu`, {
    "id": id,    
    "name": name,
});

export const getMenu = () => axios.get(`/menu`, {
});

export const putName = () => axios.put(`/designer/name/{menuName}`, {
});

export const putPrice = () => axios.put(`/designer/price/{menuName}`, {
});