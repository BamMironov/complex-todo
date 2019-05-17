import { useState, useEffect } from 'react';

export function useForm(callback, validate, initialValues) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSublmit = event => {
        if (event) {
            event.preventDefault();
        }

        setIsSubmitting(true);
        setErrors(validate(values));
    }

    const handleChange = event => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        setErrors(validate(values));
    }

    useEffect(() => {
        if (isSubmitting && !Object.keys(errors).length) {
            callback();
        }
        setIsSubmitting(false);
    }, [errors]);

    return {
        values,
        errors,
        handleChange,
        handleSublmit
    }
}