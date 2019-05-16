import React, { useContext } from 'react';
import { Container, Row, Col, ListGroup, Button } from 'reactstrap';
import { Item } from '../../components';
import { addTask, removeTask, TodoContext } from '../../store';
import './ListScreen.scss';

export function ListScreen() {
    const { state, dispatch } = useContext(TodoContext);

    const onAddButtonClick = task => dispatch(addTask(task));
    const onRemoveTask = id => dispatch(removeTask(id));

    function TasksList() {
        return state.tasks.map(item => {
            return (
                <Item data={item} key={item.id} onRemove={() => onRemoveTask(item.id)} />
            )
        })
    }

    function MainTitle() {
        return <h1>Task List</h1>;
    }

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col md='6'>  
                    <MainTitle />         
                    <ListGroup>
                        <TasksList />
                    </ListGroup>
                    <Button onClick={() => onAddButtonClick({
                        id: new Date().valueOf(),
                        title: 'Title',
                        summary: `Looooooooooong summaryyyyyyyyyyyyyyyyyyyyyyyyy. Looooooooooong summaryyyyyyyyyyyyyyyyyyyyyyyyy. That's all`,
                        dueTime: '12h',
                        created: '12.05.2019 12:45',
                        lastUpdate: '12.05.2019 12:45',
                        email: 'mironov.bam@gmail.com'
                    })}>Add</Button>
                </Col>
            </Row>
        </Container>
    )
}

