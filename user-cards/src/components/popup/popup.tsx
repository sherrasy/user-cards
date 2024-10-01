import Cross from '@assets/icons/cross.svg?react';
import SuccessCheck from '@assets/icons/checked-box.svg?react';

type PopupProps = {
    handleClosePopup?: ()=>void;
}

function Popup({handleClosePopup}:PopupProps): JSX.Element {
  return (
    <div className='popup__wrapper'>
    <div className='popup__container'>
      <SuccessCheck className='popup__check-icon'/>
        <span className='popup__text'>Изменения сохранены!</span>
    </div>      
    <Cross className='popup__cross-icon' onClick={handleClosePopup}/>

    </div>
  );
}
export default Popup;
