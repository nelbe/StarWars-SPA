import ShallowRenderer from 'react-test-renderer/shallow';
import Characters from '../src/pages/characters';
import React from "react";

const renderer = new ShallowRenderer()
renderer.render(<Characters />);

it('Render', () => {
    expect(renderer).toMatchSnapshot();
});

it('Render type', () => {
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
});