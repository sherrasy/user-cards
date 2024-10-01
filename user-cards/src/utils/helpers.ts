import { User } from '@frontend-types/user.interface';


const checkFieldNotEmpty = (value: string) =>
    value.length > 0 && value.trim() !== '';

export const validateFormData = (formData: User) => {
    const validationResults: { [key: string]: boolean } = {};
    Object.entries(formData).map(([key, value]) => {
        const isNotEmpty = checkFieldNotEmpty(value);
        validationResults[key] = isNotEmpty;
    });

    return validationResults;
};


