import { Api } from "../api/api";
const verifyAuth = ()=>{
    if(!Api.keyJwt){
        return false;
    }else{
        return true;
    }
};

export default verifyAuth;