import { useState } from 'react';

export function useForm(callback, model) {
    const [values, setValues] = useState(model);

    const handleSublmit = event => {
        if (event) {
            event.preventDefault();
        }

        callback();
    }

    const handleChange = event => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    }

    return {
        values,
        handleChange,
        handleSublmit
    }
}