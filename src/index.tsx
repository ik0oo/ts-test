import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
    message: string
}

interface State {}

class HelloWorld extends React.Component<Props, State> {
    constructor (public props: Props) {
        super(props);
    }

    render () {
        return (
            <h1>Hello {this.props.message}</h1>
        );
    }
}

ReactDOM.render(
    <HelloWorld message="3333"/>,
    document.getElementById('root')
);
