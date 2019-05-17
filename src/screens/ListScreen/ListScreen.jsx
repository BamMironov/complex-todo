import React, { useContext } from 'react';
import { Container, Row, Col, ListGroup } from 'reactstrap';
import { Item } from '../../components';
import { removeTask, TodoContext } from '../../store';
import './ListScreen.scss';

export function ListScreen() {
    const { state, dispatch } = useContext(TodoContext);
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
                </Col>
            </Row>
        </Container>
    )
}

