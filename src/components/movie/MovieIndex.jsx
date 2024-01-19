import React from 'react';
import { Col, Container, Row } from 'reactstrap'
import MovieCreate from './MovieCreate';

function MovieIndex(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col md="4">
                        <MovieCreate token={props.token} />
                    </Col>
                    <Col md="8">
                        [TABLE TO GO HERE]
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MovieIndex