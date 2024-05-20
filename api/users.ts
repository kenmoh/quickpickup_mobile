import client from '@/api/client'
import { CreateDispatch, CreateUser, Login } from '@/utils/types';

const dispatchEndpoint = "/users/register-dispatch";
const riderEndpoint = "/users/register-rider";
const userEndpoint = "/users/register";
const user = "/users";


const createUser = async(user: CreateUser) => {

  const reqData = {
      
        email: user.email.toLowerCase().trim(),
        username: user.username,
        phone_number: user.phoneNumber,
        password: user.password
  }

  const result = await client.post(userEndpoint, reqData);
  if (!result.ok) throw new Error(result.status)
  return result.data
};



const createDispatch = async(user: CreateDispatch) => {

  const reqData = {
      
        email: user.email.toLowerCase().trim(),
        company_name: user.companyName,
        company_reg_num: user.companyRegNum,
        phone_number: user.phoneNumber,
        password: user.password
  }

  const result = await client.post(dispatchEndpoint, reqData);
  if (!result.ok) throw new Error(result.status)
  return result.data
};

const loginApi = async (user: Login) => {
  const data = new FormData();
  data.append("username", user.username.trim());
  data.append("password", user.password.trim());

  const result = await client.post("/login", data);
  if (!result.ok) throw new Error(result.status)
  return result.data
};
 





export default {
  createUser, 
  createDispatch,
  loginApi
}