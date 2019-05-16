import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ItemList } from '../components';

export function ListScreen() {
    return (
        <Container>
            <Row>
                <Col>
                    <ItemList />
                </Col>
            </Row>
        </Container>
    )
}