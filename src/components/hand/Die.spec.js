import React from 'react';
import {render} from 'react-testing-library';
import Die from './Die';

describe('Die tests', () => {
    it('contains a number', () => {
        const {getByTestId} = render(<Die num={1}/>);
        expect(getByTestId('num').textContent).toEqual("1");
    })
})