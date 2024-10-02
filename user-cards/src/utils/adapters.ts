import { EditUserDto } from '@/dto/edit-user.dto';
import { User, UserData } from '@frontend-types/user.interface';

export const adaptDataToClient = (data: UserData): User => {
  const { id, name, username, email, phone, address, company } = data;
  return {
    id,
    name,
    userName: username,
    email,
    phone,
    city: address.city,
    companyName: company.name,
    avatar: 'img/avatar.jpg',
    isArchived: false,
    isHidden: false,
  };
};

export const adaptDataToServer = (data: EditUserDto): Partial<UserData> => {
  const { userName, city, companyName } = data;
const userData: Partial<UserData> = {...data}
  if(userName){
    userData.username = userName;
  }
  if(city){
    userData.address ={ city: city};
  }
  if(companyName){
    userData.company= {name:companyName};
  }
  return userData;
};
