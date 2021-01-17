import axios from "../axios";

export const postMember = (name , phone) => axios.post(`/member`, {
    "phone": phone,    
    "name": name,
});

export const getNotComingList = () => axios.get(`/member/recentNotComingList`, {
});

export const getMember = () => axios.get(`/member/list`, {
});

export const getDetailMember = id => axios.get(`/member/${id}`, {
});

export const postMembership = (point , phone) => axios.post(`/membership`, {
    "point": point,    
    "phone": phone,
});

export const putMembership = (point,phone) => axios.put(`/membership/point`, {
    "point" : point,
    "phone" : phone
});

export const getRecentNotComingList = () => axios.get(`/member/recentNotComingList`, {
});
