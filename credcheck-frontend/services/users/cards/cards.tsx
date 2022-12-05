import axios from 'axios';
import api from '../../../interceptors/api';


const BASE_URL = 'http://localhost:8000'

export const addCards = async(route:string,payload: any): Promise<any> => {
    try {
        let response = await api.post(`${BASE_URL}${route}`, payload);
        return response;
    }
    catch (err) {
        return err
    }
}


export const getCards = async(route:string): Promise<any> => {
    try {
        let response = await api.get(`${BASE_URL}${route}`);
        return response;
    }
    catch (err) {
        return err
    }
}
