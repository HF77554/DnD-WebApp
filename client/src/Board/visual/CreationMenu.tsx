import React, {useState} from 'react'
import {mapSize} from '../types/BoardTypes'

type Props = {
    onSelection: (grid:mapSize) => void;
};

const CreationMenu:React.FC<Props> = ( { onSelection } ) => {
    const [gridWidth, widthTask] = useState<number>(5);
    const [gridLength, lengthTask] = useState<number>(5);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSelection({
            width:gridWidth,
            length:gridLength
        })
    };

    return (
        <form onSubmit={onSubmit} className=''>
            <h4>Enter Map</h4>
            <div className=''>
                <label>Width: 
                    <input type="number" min="5" max="2000" step="5" onChange={(e: React.ChangeEvent<HTMLInputElement>) => widthTask(Number(e.target.value))} />
                </label>
                <label>Length: 
                    <input type="number" min="5" max="2000" step="5" onChange={(e: React.ChangeEvent<HTMLInputElement>) => lengthTask(Number(e.target.value))} />
                </label>
            </div>
            <input type="submit" />
        </form>
    )
}

export default CreationMenu