import { useState, useEffect } from 'react';

export function useForm(callback, validate, initialValues) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleErrors = () => setErrors(validate(values));

    const handleSublmit = event => {
        if (event) {
            event.preventDefault();
        }

        handleErrors();

        if (!Object.keys(validate(values)).length) {
            callback();
        } else {
            setIsSubmitting(true);
        }
    }

    const handleChange = event => {
        event.persist();

        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }));
    }

    useEffect(() => {
        if (isSubmitting) {
            handleErrors();
        }
    }, [values]);

    return {
        values,
        errors,
        handleChange,
        handleSublmit
    }
}