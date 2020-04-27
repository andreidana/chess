import React from 'react';

export interface CellProps {
    rowIdx: number;
    cellIdx: number;
}

function Cell(props: CellProps) {
    const rowIdx = props.rowIdx;
    const cellIdx = props.cellIdx;

    return (
        <>
            <div className = "col-md-1">{rowIdx} - {cellIdx}</div>
        </>
    )
}

export default Cell;
