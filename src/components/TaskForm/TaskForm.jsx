import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useInput } from '../../hooks/useInput';
import { Statuses } from '../../enums';
import DatePicker from 'react-datepicker';
import './TaskForm.scss'

export function TaskForm(props) {
    const data = props.item || {};
    const [title, setTitle] = useInput(data.title);
    const [summary, setSummary] = useInput(data.summary);
    const [email, setEmail] = useInput(data.email);
    const [status, setStatus] = useInput(data.status || Statuses.Open);
    const [dueDate, setDueDate] = useState(data.dueDate || new Date());

    function save(e) {
        e.preventDefault();

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
        <Form className='ct-form' onSubmit={save}>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input value={title} type="text" name="title" id="title" placeholder="Type a title" onChange={setTitle} />
            </FormGroup>

            <FormGroup>
                <Label for="summary">Summary</Label>
                <Input value={summary} type="text" name="summary" id="summary" placeholder="Type a summary" onChange={setSummary} />
            </FormGroup>

            <FormGroup>
                <Label>Due Date</Label>
                <DatePicker selected={dueDate}  onChange={date => setDueDate(date)} showTimeSelect />
            </FormGroup>

            <FormGroup>
                <Label for="email">Email</Label>
                <Input value={email} type="email" name="email" id="email" placeholder="Type an email" onChange={setEmail} />
            </FormGroup>

            <FormGroup>
                <Label for="status">Select</Label>
                <Input value={status} type="select" name="status" id="status" onChange={setStatus}>
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
