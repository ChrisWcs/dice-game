import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import Die from './Die';

test('Die tests', () => {
    const sel = jest.fn();
    const {getByTestId} = render(<Die num={1} selectNotifier={sel}/>);
    expect(getByTestId('die').textContent).toEqual("1");
    fireEvent.click(getByTestId('die'));
    expect(sel).toHaveBeenCalledTimes(1);
})