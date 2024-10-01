import { getHasPostingError, getIsPosting } from '@/store/user-data/selectors';
import { EditFormData } from '@/types/edit-form-data.type';
import { AppMessage, FormFieldLabel, FormFieldName } from '@/utils/constant';
import { validateFormData } from '@/utils/helpers';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { User } from '@frontend-types/user.interface';
import { ChangeEvent, FormEvent, useState } from 'react';

type EditFormProps = {
  user: User;
};

function EditForm({ user }: EditFormProps): JSX.Element {
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

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const validationResults = validateFormData(formData);
    const isValid = !Object.values(validationResults).includes(false);
    if (isValid) {
      setInvalidMessage('');
    } else {
      const message = 'Поля не могут быть пустыми';
      setInvalidMessage(message);
    }
  };

  return (
    <div className='edit-form__wrapper'>
      <form method='post' action='/' onSubmit={handleFormSubmit}>

        <div className='edit-form__input form-input'>
          <label htmlFor={FormFieldName.Name}>
            <span className='form-input__label'>{FormFieldLabel.Name}</span>
          </label>
          <input
            type='text'
            name={FormFieldName.Name}
            className='form-input__input'
            placeholder='Имя'
            defaultValue={name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='edit-form__input form-input'>
          <label htmlFor={FormFieldName.UserName}>
            <span className='form-input__label'>{FormFieldLabel.UserName}</span>
          </label>
          <input
            type='text'
            name={FormFieldName.UserName}
            className='form-input__input'
            placeholder='Ник'
            defaultValue={userName}
            onChange={handleInputChange}
            required
          />
        </div> 
               <div className='edit-form__input form-input'>
          <label htmlFor={FormFieldName.Email}>
            <span className='form-input__label'>{FormFieldLabel.Email}</span>
          </label>
          <input
            type='email'
            name={FormFieldName.Email}
            className='form-input__input'
            placeholder='example@mail.com'
            defaultValue={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='edit-form__input form-input'>
          <label htmlFor={FormFieldName.City}>
            <span className='form-input__label'>{FormFieldLabel.City}</span>
          </label>
          <input
            type='text'
            name={FormFieldName.City}
            className='form-input__input'
            placeholder='Ник'
            defaultValue={city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='edit-form__input form-input'>
          <label htmlFor={FormFieldName.Phone}>
            <span className='form-input__label'>{FormFieldLabel.Phone}</span>
            <span className='form-input__label-required'>*</span>
          </label>
          <input
            type='tel'
            name={FormFieldName.Phone}
            className='form-input__input'
            placeholder='+7 999 999-99-99'
            defaultValue={phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='edit-form__input form-input'>
          <label htmlFor={FormFieldName.CompanyName}>
            <span className='form-input__label'>{FormFieldLabel.CompanyName}</span>
          </label>
          <input
            type='text'
            name={FormFieldName.CompanyName}
            className='form-input__input'
            placeholder='Ник'
            defaultValue={companyName}
            onChange={handleInputChange}
            required
          />
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
