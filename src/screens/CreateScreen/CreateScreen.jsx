import React, { useContext } from 'react';
import { TodoContext, addTask, editTask } from '../../store';
import { Container, Row, Col } from 'reactstrap';
import { NewForm, EditForm } from '../../components';
import { FormTypes } from '../../enums';
import { tasksService } from '../../services';

export function CreateScreen(props) {
    const { state, dispatch } = useContext(TodoContext);

    const toTaskList = () => props.history.push('/tasks');

    const saveTask = (task, action) => {
        dispatch(action(task));
        toTaskList();
    }

    const onSaveTask = task => {
        const tasks = [...state.tasks, task]

        saveTask(task, addTask);
        tasksService.setTasks(tasks);
    };
    const onEditTask = task => {
        const tasks = state.tasks.map(t => t.id === task.id ? task : t);

        saveTask(task, editTask);
        tasksService.setTasks(tasks);
    };

    function MainTitle() {
        return <h1>{props.type} a task</h1>;
    }

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col md='6'>
                    <MainTitle />
                    {
                        props.type === FormTypes.New ?
                        <NewForm onSave={onSaveTask} /> :
                        <EditForm onSave={onEditTask} item={props.location.state} />
                    }
                </Col>
            </Row>
        </Container>
    )
}