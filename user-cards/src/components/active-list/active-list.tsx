import Card from '@components/card/card';
import { getActiveUsers } from '@store/user-data/selectors';
import { useAppSelector } from '@utils/hooks';

function ActiveList(): JSX.Element {
  const users = useAppSelector(getActiveUsers());

  return (
    <div className='cards-list active-list'>
      <h1 className='cards-list__title'> Активные</h1>
      <div className='cards-list__container'>
        {users?.map((item) => (
          <Card key={item.id} user={item} />
        ))}
      </div>
    </div>
  );
}
export default ActiveList;
