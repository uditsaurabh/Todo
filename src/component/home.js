import React from 'react';
import { Card } from './card';
import StopWatch from './stopwatch';

function HomeComponent() {
    return (
        <div>
            <Card background="bgGreen">
                <h1>Home Page</h1>
                <StopWatch title="Seconds: " />
            </Card>
        </div>
    );
}

export default HomeComponent;



{/* <img src={logo} className="App-logo" alt="logo" /> */ }