import React, {useState} from 'react'
import {mapSize} from '../types/BoardTypes'
import './creationMenu.css'

type Props = {
    onSelection: (grid:mapSize) => void;
};

const CreationMenu:React.FC<Props> = ( { onSelection } ) => {
    const stepNum = 5;
    const [gridRow, rowTask] = useState<number>(15);
    const [gridCol, colTask] = useState<number>(15);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSelection({
            rows:gridRow/stepNum,
            columns:gridCol/stepNum,
            totalSquares: (gridRow/stepNum)*(gridCol/stepNum)
        })
    };

    return (
        <form onSubmit={onSubmit} className='form-menu'>
            <h4>Enter Map</h4>
            <div className=''>
                <label>Width: 
                    <input type="number" min="15" max="2000" step={stepNum} onChange={(e: React.ChangeEvent<HTMLInputElement>) => rowTask(Number(e.target.value))} />
                </label>
                <label>Length: 
                    <input type="number" min="15" max="2000" step={stepNum} onChange={(e: React.ChangeEvent<HTMLInputElement>) => colTask(Number(e.target.value))} />
                </label>
            </div>
            <input type="submit" />
        </form>
    )
}

export default CreationMenu