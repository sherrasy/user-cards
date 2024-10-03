import { getHasPostingError, getIsPosting } from '@/store/user-data/selectors';
import { EditFormData } from '@frontend-types/edit-form-data.type';
import { User } from '@frontend-types/user.interface';
import { updateUser } from '@store/user-data/api-actions';
import { AppMessage, FormFieldLabel, FormFieldName } from '@utils/constant';
import { validateFormData } from '@utils/helpers';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { ChangeEvent, FormEvent, useState } from 'react';
import Cross from '@assets/icons/cross.svg?react';

type EditFormProps = {
  user: User;
  handleVisibilityPopup: () => void;
};

function EditForm({ user, handleVisibilityPopup }: EditFormProps): JSX.Element {
  const { id, name, userName, email, city, phone, companyName } = user;
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<EditFormData>({
    name,
    userName,
    email,
    city,
    phone,
    companyName,
  });
  const [invalidMessage, setInvalidMessage] = useState('');
  const isPosting = useAppSelector(getIsPosting);
  const hasError = useAppSelector(getHasPostingError);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetDataInput = (name: string) => {
    setFormData({ ...formData, [name]: '' });
  };

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const validationResults = validateFormData(formData);
    const isValid = !Object.values(validationResults).includes(false);
    if (isValid) {
      setInvalidMessage('');
      dispatch(updateUser({ id, ...formData })).then(
        (res) =>
          res.meta.requestStatus === 'fulfilled' && handleVisibilityPopup()
      );
    } else {
      const message = 'Поля не могут быть пустыми';
      setInvalidMessage(message);
    }
  };

  return (
    <div className='edit-form__wrapper'>
      <h1 className='edit-form__title'> Данные профиля</h1>
      <form method='post' action='/' onSubmit={handleFormSubmit}>
        <div className='edit-form__input form-input'>
          <label htmlFor={FormFieldName.Name}>
            <span className='form-input__label'>{FormFieldLabel.Name}</span>
          </label>
          <div className='form-input__input-wrapper'>
          <input
            type='text'
            id={FormFieldName.Name}
            name={FormFieldName.Name}
            className='form-input__input'
            placeholder='Имя'
            value={formData.name || ''}
            onChange={handleInputChange}
            required
          />
          <Cross
            className='form-input__input-reset'
            onClick={() => resetDataInput(FormFieldName.Name)}
          />
        </div>
        </div>
        <div className='edit-form__input form-input'>
          <label htmlFor={FormFieldName.UserName}>
            <span className='form-input__label'>{FormFieldLabel.UserName}</span>
          </label>
          <div className='form-input__input-wrapper'>
          <input
            type='text'
            id={FormFieldName.UserName}
            name={FormFieldName.UserName}
            className='form-input__input'
            placeholder='Ник'
            value={formData.userName || ''}
            onChange={handleInputChange}
            required
          />
          <Cross
            className='form-input__input-reset'
            onClick={() => resetDataInput(FormFieldName.UserName)}
          />
        </div>
        </div>
        <div className='edit-form__input form-input'>
          <label htmlFor={FormFieldName.Email}>
            <span className='form-input__label'>{FormFieldLabel.Email}</span>
          </label>
          <div className='form-input__input-wrapper'>
          <input
            type='email'
            id={FormFieldName.Email}
            name={FormFieldName.Email}
            className='form-input__input'
            placeholder='example@mail.com'
            value={formData.email || ''}
            onChange={handleInputChange}
            required
          />
          <Cross
            className='form-input__input-reset'
            onClick={() => resetDataInput(FormFieldName.Email)}
          />
        </div>
        </div>
        <div className='edit-form__input form-input'>
          <label htmlFor={FormFieldName.City}>
            <span className='form-input__label'>{FormFieldLabel.City}</span>
          </label>
          <div className='form-input__input-wrapper'>
          <input
            type='text'
            id={FormFieldName.City}
            name={FormFieldName.City}
            className='form-input__input'
            placeholder='Город'
            value={formData.city || ''}
            onChange={handleInputChange}
            required
          />
          <Cross
            className='form-input__input-reset'
            onClick={() => resetDataInput(FormFieldName.City)}
          />
        </div>
        </div>
        <div className='edit-form__input form-input'>
          <label htmlFor={FormFieldName.Phone}>
            <span className='form-input__label'>{FormFieldLabel.Phone}</span>
          </label>
          <div className='form-input__input-wrapper'>
          <input
            type='tel'
            id={FormFieldName.Phone}
            name={FormFieldName.Phone}
            className='form-input__input'
            placeholder='+7 999 999-99-99'
            value={formData.phone || ''}
            onChange={handleInputChange}
            required
          />
          <Cross
            className='form-input__input-reset'
            onClick={() => resetDataInput(FormFieldName.Phone)}
          />
        </div>
        </div>
        <div className='edit-form__input form-input'>
          <label htmlFor={FormFieldName.CompanyName}>
            <span className='form-input__label'>
              {FormFieldLabel.CompanyName}
            </span>
          </label>
          <div className='form-input__input-wrapper'>
          <input
            type='text'
            id={FormFieldName.CompanyName}
            name={FormFieldName.CompanyName}
            className='form-input__input'
            placeholder='Название компании'
            value={formData.companyName || ''}
            onChange={handleInputChange}
            required
          />
          <Cross
            className='form-input__input-reset'
            onClick={() => resetDataInput(FormFieldName.CompanyName)}
          /></div>
        </div>
        <button
          className='edit-form__button'
          type='submit'
          disabled={isPosting}
        >
          <span className='edit-form__button-text'>Сохранить</span>
        </button>
        {hasError && <p className='edit-form__error'>{AppMessage.Error}</p>}
        {invalidMessage && <p className='edit-form__error'>{invalidMessage}</p>}
      </form>
    </div>
  );
}
export default EditForm;
