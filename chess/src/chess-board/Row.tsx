import React from 'react';

import Cell from './Cell';
import Margin from './Margin';

interface RowProps {
    rowIdx: number;
}

function Row(props: RowProps) {
    const rowIdx = props.rowIdx;
    const cellRows = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className = "row">
            <Margin/>
            {
                cellRows.map((item) => <Cell rowIdx = { rowIdx } cellIdx = { item }/>)
            }
            <Margin/>
        </div>
    )
}

export default Row;
