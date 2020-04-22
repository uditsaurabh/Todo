import React from 'react';

class StopWatch extends React.Component {
    constructor(props) {
        super();
        this.state = {
            seconds: 0,
            title: props.title
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.tick();
        }, 1000);
    }

    tick() {
        this.setState({ seconds: this.state.seconds + 1 })
    }

    render() {
        return (
            <div>
                {this.state.title + this.state.seconds}
            </div>
        )
    }
}


export default StopWatch;