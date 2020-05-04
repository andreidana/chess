import React from 'react';

import Cell from './Cell';
import Margin from './Margin';

import './Row.css';

export interface RowProps {
    rowIdx: number;
}

function Row(props: RowProps) {
    const rowIdx = props.rowIdx;
    const cellRows = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className = "row rowSize">
            <Margin/>
            {
                cellRows.map((item) => <Cell key = { item } rowIdx = { rowIdx } cellIdx = { item }/>)
            }
            <Margin/>
        </div>
    )
}

export default Row;
