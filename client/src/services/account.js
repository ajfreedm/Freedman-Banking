import api from './apiConfig';

export const getAllAccounts = async () => {
    const resp = await api.get('/accounts');
    return resp.data;
}

export const postAccount = async (accountData) => {
    const resp = await api.post('/accounts', { account: accountData });
    return resp.data;
  };

export const deleteAccount = async (id) => {
    await api.delete(`/accounts/${id}`);
}