import React from 'react';
import { TaskForm } from '../TaskForm/TaskForm';
import { Redirect } from 'react-router-dom';

export function EditForm(props) {
    const getTaskProperties = () => ({
        lastUpdate: new Date()
    });

    const buttonName = 'Edit';

    return props.item ? 
        <TaskForm {...props} getTaskProperties={getTaskProperties} buttonName={buttonName} /> :
        <Redirect to='/tasks' /> 
}
