import { EditFormData } from '@frontend-types/edit-form-data.type';

const checkFieldNotEmpty = (value: string) =>
    value.length > 0 && value.trim() !== '';

export const validateFormData = (formData: EditFormData) => {
    const validationResults: { [key: string]: boolean } = {};
    Object.entries(formData).map(([key, value]) => {
        const isNotEmpty = checkFieldNotEmpty(value);
        validationResults[key] = isNotEmpty;
    });

    return validationResults;
};


