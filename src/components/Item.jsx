import React from 'react';
import { Card, CardBody, CardTitle, CardText, ListGroupItem, Row, Col } from 'reactstrap';

export default function Item() {
    return (
        <ListGroupItem>
            <Row>
                <Col xs='4'>Title</Col>
                <Col xs='4'>Desc</Col>
                <Col xs='auto'></Col>
            </Row>
        </ListGroupItem>
    );
}