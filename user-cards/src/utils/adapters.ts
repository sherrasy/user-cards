import { User, UserData } from "@frontend-types/user.interface";

export const adaptDataToClient = (data:UserData):User=>{
const {id, name, username, email, phone, address, company} = data;
    return {id, name, userName:username, email, phone, city:address.city, companyName:company.name, avatar:'img/avatar.jpg', isArchived:false, isHidden:false}
}

export const adaptDataToServer = (data:User):UserData=>{
const {id, name, userName, email, phone, city, companyName} = data;
    return {id, name, username:userName, email, phone, address:{city:city}, company:{name:companyName}}
}

