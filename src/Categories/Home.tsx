import React, { Component } from 'react';
import {Container, Row, Col}  from 'reactstrap';
import '../App.css';

interface PageProps{

}

interface PageContext{
    
}


class Home extends Component<PageProps,PageContext> {

    constructor(props : PageProps){
        super(props);
    }

    componentDidMount(): void {
        
    }

    render() {

        const yobaRoll = (
            <div>
            <img src={'https://stickerboom.ru/files/2014/11/13/1735x03a8-300x300.png'} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            </div>
        );
        

        const items = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

        const YobaRolls = items.map
        (
            i => 
            (
            <Col xs='4'>
                {yobaRoll}
            </Col>
            )
        );

        return (
            <Container>
                <h1>
                    Home page
                </h1>
                <Container>
                        <Row>
                            {YobaRolls}
                        </Row>
                </Container>
            </Container>
        );
    }
}

export default Home;