import React, { useContext } from 'react';
import { TodoContext, addTask } from '../../store';
import { Container, Row, Col } from 'reactstrap';
import { FormTask } from '../../components';

export function CreateScreen({ history }) {
    const { dispatch } = useContext(TodoContext);
    const onSaveTask = task => {
        dispatch(addTask(task));
        history.push('/tasks');
    };

    function MainTitle() {
        return <h1>Create a task</h1>;
    }

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col md='6'>
                    <MainTitle />
                    <FormTask className='ct-form' onSave={onSaveTask} />
                </Col>
            </Row>
        </Container>
    )
}