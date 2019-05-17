import React from 'react';
import { TaskForm } from '../TaskForm/TaskForm';

export function NewForm(props) {
    const getTaskProperties = () => ({
        id: new Date().valueOf(),
        created: new Date()
    });

    return (
        <TaskForm {...props} getTaskProperties={getTaskProperties} buttonName='Create' />
    );
}
