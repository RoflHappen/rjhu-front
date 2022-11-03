import React, { Component } from 'react';
import {Container, Row, Col}  from 'reactstrap';


class Home extends Component {
    render() {
        return (
            <Container>
                <h1>
                    Home page
                </h1>
                <Container>
                    <Row className='d-flex justify-content-center'>
                        <Col xs="8">

                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Home;