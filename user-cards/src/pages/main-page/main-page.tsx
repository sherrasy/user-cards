import Loader from '@/components/loader/loader';
import ActiveList from '@components/active-list/active-list';
import ArchivedList from '@components/archived-list/archived-list';
import ErrorMessage from '@components/error-message/error-message';
import Header from '@components/header/header';
import { getHasError, getIsLoading } from '@store/user-data/selectors';
import { useAppSelector } from '@utils/hooks';

function MainPage(): JSX.Element {
  const isLoading = useAppSelector(getIsLoading);
  const hasError = useAppSelector(getHasError);
  return (
    <div className='main-page'>
      <Header />
      <main>
        {hasError && <ErrorMessage />}
        {isLoading && <Loader/>}
        {!isLoading && !hasError && (
          <>
            <ActiveList />
            <ArchivedList />
          </>
        )}
      </main>
    </div>
  );
}
export default MainPage;
