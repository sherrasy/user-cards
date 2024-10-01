import Card from '@components/card/card';
import { getArchivedUsers } from '@store/user-data/selectors';
import { useAppSelector } from '@utils/hooks';

function ArchivedList(): JSX.Element {
  const users = useAppSelector(getArchivedUsers());

  return (
    <div className='cards-list archived-list'>
      <h1 className='cards-list__title'> Архив</h1>
      <div className='cards-list__container'>
        {users?.map((item) => (
          <Card key={item.id} user={item} />
        ))}
      </div>
    </div>
  );
}
export default ArchivedList;
