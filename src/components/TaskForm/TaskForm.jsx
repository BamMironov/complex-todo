import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useInput } from '../../hooks/useInput';
import { Statuses } from '../../enums';
import './TaskForm.scss'

export function FormTask(props) {
    const [title, setTitle] = useInput();
    const [summary, setSummary] = useInput();
    const [email, setEmail] = useInput();
    const [status, setStatus] = useInput(Statuses.Open);

    function save(e) {
        e.preventDefault();

        props.onSave({
            id: new Date().valueOf(),
            title,
            summary,
            email,
            status,
            // to be fixed
            dueDate: '12h',
            created: '12.05.2019 12:45',
            lastUpdate: '12.05.2019 12:45'
        });

        reset();
    }

    function reset() {
        setTitle();
        setSummary();
        setEmail();
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

            <Button color='primary' type='submit'>Create</Button>
        </Form>
    );
}
