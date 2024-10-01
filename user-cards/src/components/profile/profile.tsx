type ProfileProps = {
  avatar?: string;
};

function Profile({ avatar }: ProfileProps): JSX.Element {
  const settingsDefault = [
    'Данные профиля',
    'Рабочее пространство',
    'Приватность',
    'Безопасность',
  ];

  return (
    <div className='profile__wrapper'>
      <div className='profile__image'>
        <img src='img/avatar.jpg' alt='avatar-image' />
      </div>
      <div className='profile__settings settings'>
        <ul className='settings__list'>
          {settingsDefault.map((item) => (
            <li key={item}
              className={`settings__option ${
                settingsDefault[0] === item ? 'isActive' : ''
              }`}
            >
                {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Profile;
