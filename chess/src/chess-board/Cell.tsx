import React from 'react';

import './Cell.css';

export interface CellProps {
    rowIdx: number;
    cellIdx: number;
}

function Cell(props: CellProps) {
    const rowIdx = props.rowIdx;
    const cellIdx = props.cellIdx;
    const cellColor = (( rowIdx % 2 === 0 && cellIdx % 2 === 0 ) || ( rowIdx % 2 !== 0 && cellIdx % 2 !== 0)) ? "cellBlackColor" : "cellWhiteColor";
    const cellStyle = "col-md-1 cellSize " + cellColor;

    return (
        <div className = { cellStyle }>{ rowIdx } - { cellIdx }</div>
    )
}

export default Cell;
