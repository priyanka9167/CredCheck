import axios from 'axios';
import api from '../../interceptors/api';
const local_url = 'http://localhost:8000';

const userRegistration = async(url: String, payload: any): Promise<any> => {
    try {
        let response = await axios.post(`${local_url}${url}`, payload);
        return response
    }
    catch (err) {
        return err
    }
}

export {userRegistration}