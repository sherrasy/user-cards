import { AppRoute } from '@utils/constant';
import { useNavigate } from 'react-router-dom';
import BackArrow from '@assets/icons/backarrow.svg?react';

type BackButtonProps = {
    isDisabled:boolean;
}

function BackButton({isDisabled}:BackButtonProps): JSX.Element {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(AppRoute.Main);
  };
  return (
    <div className='back-button__wrapper'>
      <div className={`back-button__container ${isDisabled ? 'disabled':''}`} onClick={!isDisabled ? handleRedirect : undefined}>
        <BackArrow className='back-button__icon' />
        <span className='back-button__text'>Назад</span>
      </div>
    </div>
  );
}
export default BackButton;
