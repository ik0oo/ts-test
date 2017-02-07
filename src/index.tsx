import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
    message: string
}

interface State {}

export default class HelloWorld extends React.Component<Props, State> {
    constructor (public props: Props) {
        super(props);
    }

    render () {
        return (
            <h1>Hello {this.props.message}</h1>
        );
    }
}
