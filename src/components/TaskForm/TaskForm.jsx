import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useForm } from '../../hooks/useForm';
import { Statuses } from '../../enums';
import DatePicker from 'react-datepicker';
import { validate } from './formValidation';
import './TaskForm.scss'

export function TaskForm(props) {
    const data = props.item || {};
    const initialValues = {
        title: data.title || '',
        summary: data.summary || '',
        email: data.email || '',
        status: data.status || Statuses.Open,
        dueDate: data.dueDate || new Date()
    }

    const { values, errors, handleChange, handleSublmit } = useForm(save, validate, initialValues);
    const [dueDate, setDueDate] = useState(data.dueDate || new Date());

    function save() {
        const { title, summary, email, status } = values;
        const newTask = {
            title,
            summary,
            email,
            status,
            dueDate,
            lastUpdate: new Date()
        };

        props.onSave({
            ...data,
            ...newTask,
            ...props.getTaskProperties()
        });
    }

    return (
        <Form className='ct-form' onSubmit={handleSublmit}>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input value={values.title}
                    className={`${errors.title && 'is-invalid'}`}
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Type a title"
                    onChange={handleChange} />
                <div className="invalid-feedback">{errors.title}</div>
            </FormGroup>

            <FormGroup>
                <Label for="summary">Summary</Label>
                <Input value={values.summary}
                    className={`${errors.summary && 'is-invalid'}`}
                    type="text"
                    name="summary"
                    id="summary"
                    placeholder="Type a summary"
                    onChange={handleChange} />
                <div className="invalid-feedback">{errors.summary}</div>
            </FormGroup>

            <FormGroup>
                <Label>Due Date</Label>
                <DatePicker selected={dueDate}  onChange={date => setDueDate(date)} showTimeSelect minDate={new Date()} />
            </FormGroup>

            <FormGroup>
                <Label for="email">Email</Label>
                <Input value={values.email}
                    className={`${errors.email && 'is-invalid'}`}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Type an email"
                    onChange={handleChange} />
                <div className="invalid-feedback">{errors.email}</div>
            </FormGroup>

            <FormGroup>
                <Label for="status">Select</Label>
                <Input value={values.status} type="select" name="status" id="status" onChange={handleChange}>
                    {
                        Object.values(Statuses).map(status => {
                            return (
                                <option key={status}>{status}</option>
                            )
                        })
                    }
                </Input>
            </FormGroup>

            <Button color='primary' type='submit'>{props.buttonName}</Button>
        </Form>
    );
}
