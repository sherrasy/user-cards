type DropdownProps = {
  isOpen: boolean;
  isArchived: boolean;
  id: number;
};

function Dropdown({ isOpen, isArchived, id }: DropdownProps): JSX.Element {
  const handleEdit = (id: number) => console.log('edit', id);
  const handleArchive = (id: number) => console.log('archive', id);
  const handleHide = (id: number) => console.log('hide', id);

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
