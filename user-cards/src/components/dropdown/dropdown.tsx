import { updateUserStatus } from "@/store/user-data/user-data";
import { useAppDispatch } from "@/utils/hooks";

type DropdownProps = {
  isOpen: boolean;
  isArchived: boolean;
  id: number;
};

function Dropdown({ isOpen, isArchived, id }: DropdownProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleEdit = (id: number) => console.log('edit', id);
  const handleArchive = (id: number) => dispatch(updateUserStatus({id, isArchived:true}));
  const handleHide = (id: number) => dispatch(updateUserStatus({id, isHidden:true}));

  const defaultOptions = [
    { name: 'Редактировать', cb: () => handleEdit(id) },
    { name: 'Архивировать', cb: () => handleArchive(id) },
    { name: 'Скрыть', cb: () => handleHide(id) },
  ];
  const archivedOptions = [{ name: 'Активировать', cb: () => handleHide(id) }];
  const currentOptions = isArchived ? archivedOptions : defaultOptions;

  return (
    <div className={`dropdown-container ${!isOpen ? 'dropdown-hidden':''}`}>
      <ul>
        {currentOptions.map(({ name, cb }) => (
          <li key={name} className='dropdown-container__option' onClick={cb}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Dropdown;
