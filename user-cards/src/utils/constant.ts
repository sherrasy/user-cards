export const ApiConnectParam = {
  Url: 'https://jsonplaceholder.typicode.com/users',
  Timeout: 5000,
};

export const AppMessage = {
  Loading: 'Загрузка...',
  Error: 'Произошла ошибка. Попробуйте снова.',
} as const;

export const AppRoute = {
  Main: '/',
  EditUser: '/edit-user',
} as const;

export const REDUCER_NAME = 'USERS';

export const ApiActionName = {
  FetchUsers: 'fetch-users',
  AddUser: 'add-user',
  EditUser: 'edit-user',
} as const;

export const FormFieldLabel = {
  Name: 'Имя',
  UserName: 'Никнейм',
  Email: 'Почта',
  City: 'Город',
  Phone: 'Телефон',
  CompanyName: 'Название компании',
} as const;


export const FormFieldName = {
  Name: 'name',
  UserName: 'userName',
  Email: 'email',
  City: 'city',
  Phone: 'phone',
  CompanyName: 'companyName',
} as const;

