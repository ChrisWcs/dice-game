import React from 'react';

const Die = ({num, selectNotifier}) => (
    <button data-testid="die"
            onClick={() => selectNotifier()}>
        {num}
    </button>
);

export default Die;