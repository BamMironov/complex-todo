import { useState } from 'react';

export function useInput(initialValue = '') {
    const [title, setTitle] = useState(initialValue);
    const onFieldChange = event => event ? setTitle(event.target.value) : setTitle(initialValue);

    return [title, onFieldChange];
}