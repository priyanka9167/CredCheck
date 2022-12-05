import axios from 'axios';
import api from '../../../interceptors/api';

export const addCards = async(route:string,payload: any): Promise<any> => {
    try {
        let response = await api.post(``, payload);
        return response
    }
    catch (err) {
        return err
    }
}

