import React from 'react';
import { ListGroup } from 'reactstrap';
import Item from './Item';

export function ItemList() {
    return (
        <ListGroup>
            {fakeData.map(item => {
                return (
                    <Item key='n' />
                )
            })}
        </ListGroup>
    );
}

const fakeData = [1];