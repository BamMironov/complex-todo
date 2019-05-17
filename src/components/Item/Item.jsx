import React, { useState } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroupItem,
    Button,
    Collapse
} from 'reactstrap';
import { StatusBadge } from '../';
import { Statuses } from '../../enums';
import './Item.scss';

export function Item({ data, onRemove }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    function CollapsedContent() {
        return (
            <Collapse className='ct-item__collapse' isOpen={isOpen}>
                <CardText>
                    <span className='ct-item__title'>Due time:</span> {data.dueDate}
                </CardText>
                <CardText>
                    <span className='ct-item__title'>Created:</span> {data.created}
                </CardText>
                <CardText>
                    <span className='ct-item__title'>Last update:</span> {data.lastUpdate}
                </CardText>
                <CardText>
                    <span className='ct-item__title'>Email:</span> {data.email}
                </CardText>
            </Collapse>
        );
    }
    
    return (
        <ListGroupItem>
            <Card className='ct-item'>
                <CardBody>
                    <CardTitle className='ct-item__title'>
                        {data.title} <StatusBadge type={Statuses.InProgress}></StatusBadge>
                        <Button close onClick={onRemove} />
                    </CardTitle>
                    <div className='ct-item__title'>Summary:</div>
                    <CardText className='text-break'>{data.summary}</CardText>
                    <CollapsedContent />
                    
                    <div className='d-flex justify-content-between'>
                        <Button size='sm' onClick={toggle}>Expand</Button>
                        <Button color='link' size='sm'>Edit</Button>
                    </div>
                </CardBody>
            </Card>
        </ListGroupItem>
    );
}