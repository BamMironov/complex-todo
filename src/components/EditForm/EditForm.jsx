import React from 'react';
import { TaskForm } from '../TaskForm/TaskForm';
import { Redirect } from 'react-router-dom';

export function EditForm(props) {
    const getTaskProperties = () => ({
        lastUpdate: new Date()
    });

    return props.item ? 
        <TaskForm {...props} getTaskProperties={getTaskProperties} buttonName='Edit' /> :
        <Redirect to='/tasks' /> 
}
