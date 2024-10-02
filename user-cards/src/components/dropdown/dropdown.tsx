import { updateUserStatus } from "@/store/user-data/user-data";
import { AppRoute } from "@/utils/constant";
import { useAppDispatch } from "@/utils/hooks";
import { useNavigate } from "react-router-dom";

type DropdownProps = {
  isOpen: boolean;
  isArchived: boolean;
  id: number;
};

function Dropdown({ isOpen, isArchived, id }: DropdownProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`${AppRoute.EditUser}/${id}`);
  };
  const handleArchive = (id: number, status:boolean) => dispatch(updateUserStatus({id, isArchived:status}));
  const handleHide = (id: number) => dispatch(updateUserStatus({id, isHidden:true}));

  const defaultOptions = [
    { name: 'Редактировать', cb: () => handleRedirect() },
    { name: 'Архивировать', cb: () => handleArchive(id, true) },
    { name: 'Скрыть', cb: () => handleHide(id) },
  ];
  const archivedOptions = [{ name: 'Активировать', cb: () => handleArchive(id, false) }];
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
