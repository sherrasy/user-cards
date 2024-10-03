import EditForm from '@/components/edit-form/edit-form';
import ErrorMessage from '@/components/error-message/error-message';
import { getUserById } from '@/store/user-data/selectors';
import { useAppSelector } from '@/utils/hooks';
import BackButton from '@components/back-button/back-button';
import Header from '@components/header/header';
import Popup from '@components/popup/popup';
import Profile from '@components/profile/profile';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditUserPage(): JSX.Element {
  const {id} = useParams();
  const user = useAppSelector(getUserById(id))
  const [isPopupVisible, setPopupIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPopupIsVisible(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [isPopupVisible===true]);

  if(!user){
    return <ErrorMessage/>
  } 
  const handleVisibilityPopup = () => setPopupIsVisible((prev) => !prev);
  return (
    <div className='edit-user-page'>
      <div className='edit-user-page__wrapper'>
        <Header />
        <main>
          <BackButton isDisabled={isPopupVisible} />
          <section className='edit-user-page__user-data'>
            <Profile avatar={user.avatar}/>
            <EditForm user={user} handleVisibilityPopup={handleVisibilityPopup}/>
          </section>
        </main>
      </div>
      {isPopupVisible && <Popup handleClosePopup={handleVisibilityPopup} />}
    </div>
  );
}
export default EditUserPage;
