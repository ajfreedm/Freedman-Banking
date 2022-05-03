import api from './apiConfig';

export const getAllAccounts = async () => {
    const resp = await api.get('/accounts');
    return resp.data;
}