import axios from "../axios";

export const postDesigner = (id ,name) => axios.post(`/designer`, {
    "id": id,    
    "name": name,
});

export const getDesigner = () => axios.get(`/designer`, {
});