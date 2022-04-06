import React, {useState,useEffect} from 'react'
import {mapSize} from '../types/BoardTypes'

//gotta figure out how to handle when something does not yet exist but will be later
type Props = {
  gridSize: any;
};

const BoardGrid:React.FC<Props>  = ({ gridSize } ) => {
  const [numberBoxes, numberBoxesTask] = useState([1,2,3,4,5,6,7,8,9])

  useEffect(() => {
    const fvdf = Array(gridSize.totalSquares).keys()
    console.log(fvdf)
    const numBox = [...Array(gridSize.totalSquares)]
    numberBoxesTask(numBox)
  }, [gridSize]);

  return (
    <div className='grid-container'>
      {numberBoxes.map((n: number) => console.log(n))}
    </div>
  )
}

export default BoardGrid