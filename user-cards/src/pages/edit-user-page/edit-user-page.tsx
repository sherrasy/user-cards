import EditForm from '@/components/edit-form/edit-form';
import BackButton from '@components/back-button/back-button';
import Header from '@components/header/header';
import Popup from '@components/popup/popup';
import Profile from '@components/profile/profile';
import { useState } from 'react';

function EditUserPage(): JSX.Element {
  const [isPopupVisible, setPopupIsVisible] = useState(false);
  const handleVisibilityPopup = () => setPopupIsVisible((prev) => !prev);

  return (
    <div className='edit-user-page'>
      <div className='edit-user-page__wrapper'>
        <Header />
        <main>
          <BackButton isDisabled={isPopupVisible} />
          <section className='edit-user-page__user-data'>
            <Profile/>
            {/* <EditForm user={}/> */}
          </section>
        </main>
      </div>
      {isPopupVisible && <Popup handleClosePopup={handleVisibilityPopup} />}
    </div>
  );
}
export default EditUserPage;
