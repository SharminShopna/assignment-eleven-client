import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const axiosInstance = axios.create({
       baseURL: 'https://assignment-eleven-server-nu.vercel.app',
    //   baseURL: 'http://localhost:5174',
    withCredentials:true
})

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() =>{
        axiosInstance.interceptors.response.use(response =>{
            return response;
        }, error =>{
            console.log('Interceptor error', error);
            if(error.status === 401 || error.status === 403){
               console.log('need to logout user')
               logOut()
               .then(()=>{
                console.log('logged out');
                navigate('/logIn');
               })
               .catch(error => console.log(error));
            }


            return Promise.reject(error);
        })
    },[])



   return axiosInstance;
};

export default useAxiosSecure;