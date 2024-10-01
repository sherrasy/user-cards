import Logo from '@assets/icons/logo-sign.svg?react';
import Favorite from '@assets/icons/favorite.svg?react';
import Notification from '@assets/icons/notification.svg?react';

function Header(): JSX.Element {
    const defaultUser = {
        avatar:'img/avatar.jpg',
        userName:"Ivan1234"
    }
  return (
    <div className='header'>
      <div className='header__logo'>
          <Logo />
      </div>
      <div className='header__user user-container'>
        <div className='user-container__controls'>
            <Favorite/>
            <Notification/>
        </div>
        <div className='user-container__info user-info'>
            <img className='user-info__avatar'src={defaultUser.avatar} alt='user-avtar'/>
            <span className='user-info__name'> {defaultUser.userName}</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
