import instance from './auth';

// const inctanceContacts = axios.create({
//   baseURL: 'https://6363c7828a3337d9a2e7a4e3.mockapi.io/api/contacts',
//   params: {
//     _limit: 12,
//   },
// });

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};
export const addContacts = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};
export const removeContacts = async id => {
  const { data } = await instance.delete(`/contacts${id}`);
  return data;
};
