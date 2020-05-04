import React from 'react';

import Row from './Row';
import PlayerSide from './PlayerSide';

import './Board.css';

function Board() {   
    const rows = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className = "boardSize boardColor">
            <PlayerSide/>
            <div className = "row">
            {
                rows.map((row) => <Row key = { row } rowIdx = { row }/>)
            }
            </div>
            <PlayerSide/>
        </div>
    )
}

export default Board;
