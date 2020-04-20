import React from 'react';

import Cell from './Cell';

interface RowProps {
    rowIdx: number;
}

function Row(props: RowProps) {
    const rowIdx = props.rowIdx;
    const cellRows = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className = "row">
            <div className = "div-md-2">L-Margin</div>
            {
                cellRows.map((item) => <Cell rowIdx = { rowIdx } cellIdx = { item }/>)
            }
            <div className = "div-md-2">R-Margin</div>  
        </div>
    )
}

export default Row;
