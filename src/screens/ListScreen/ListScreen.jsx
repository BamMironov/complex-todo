import React, { useContext } from 'react';
import { Container, Row, Col, ListGroup } from 'reactstrap';
import { Item } from '../../components';
import { removeTask, TodoContext } from '../../store';
import { NavLink } from 'react-router-dom';
import { tasksService } from '../../services';

import './ListScreen.scss';

export function ListScreen({ history }) {
    const { state, dispatch } = useContext(TodoContext);
    const onRemoveTask = id => {
        const tasks = state.tasks.filter(task => task.id !== id);

        dispatch(removeTask(id));
        tasksService.setTasks(tasks);
    };

    const onEditTask = task => {
        history.push({
            pathname: '/edit',
            state: task
        });
    }

    function TasksList() {
        return (
            <ListGroup>
                {
                    state.tasks.map(item => {
                        return (
                            <Item data={item} key={item.id} remove={() => onRemoveTask(item.id)} edit={() => onEditTask(item)} />
                        )
                    })
                }
            </ListGroup>
        )
    }

    function MainTitle() {
        return <h1>Task List</h1>;
    }

    function Fallback() {
        return (
            <div className='ct-fallback'>
                <p>It seems like that the list is Empty.</p>
                <p>Let's <NavLink to='/create'>create</NavLink> a new one!</p>
            </div>
        )
    }

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col md='6'>
                    <MainTitle />
                    {
                        state.tasks.length ? <TasksList /> : <Fallback />
                    }
                </Col>
            </Row>
        </Container>
    )
}

