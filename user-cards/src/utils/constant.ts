
export const ApiConnectParam = {
    Url: 'https://jsonplaceholder.typicode.com/users',
    Timeout: 5000
  };

  export const AppMessage = {
    Loading: 'Загрузка...',
    Error: 'Произошла ошибка. Попробуйте снова.',
  } as const;

  export const AppRoute = {
    Main: '/',
    EdiUser: '/edit-user',
  } as const;

export const REDUCER_NAME = 'USERS'

  export const ApiActionName = {
    FetchUsers: 'fetch-users',
    AddUser: 'add-user',
    EditUser: 'edit-user',
  } as const;
  