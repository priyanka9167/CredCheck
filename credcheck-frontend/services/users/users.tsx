import axios from 'axios';
import api from '../../interceptors/api';
import { API_CONSTANTS } from '../../constants/api_endpoints.constants';

const userRegistration = async(payload: any): Promise<any> => {
    try {
        let response = await axios.post(`${API_CONSTANTS.BASE_URL}${API_CONSTANTS.REGISTER}`, payload);
        return response
    }
    catch (err) {
        return err
    }
}

const login = async(payload: any): Promise<any> => {
    try {
        let response = await axios.post(`${API_CONSTANTS.BASE_URL}${API_CONSTANTS.LOGIN}`, payload);
        return response
    } catch (err) {
        return err
    }
}

export {userRegistration, login}
