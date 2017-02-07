import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';
import HelloWorld from '../src/index';

describe('HelloWorld', () => {
	let renderer: React.ShallowRenderer;

	beforeEach(() => {
		renderer = TestUtils.createRenderer();
		renderer.render(<HelloWorld message="World"/>);
	});

	it('should render correctly', () => {
		const result = renderer.getRenderOutput();
		chai.assert.strictEqual(result.type, 'h1');
	});

	it('should have correct prop velues', () => {
		const result = renderer.getRenderOutput();
		const propValues = result.props.children.join('');
		chai.assert.strictEqual(propValues, 'Hello World');
	});
});