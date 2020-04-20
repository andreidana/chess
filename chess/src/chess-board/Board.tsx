import React from 'react';

import Row from './Row';

function Board() {   
    const rows = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <>
            <div className = "row">Top of Board</div>
            <div className = "row mt-2">
                {
                    rows.map((row) => <Row rowIdx = { row }/>)
                }
            </div>
            <div className = "row">Bottom of Board</div>
        </>
    )
}

export default Board;
