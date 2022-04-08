import React, {useState,useEffect} from 'react'
import GridBox from './GridBox';
import './grid.css'

//gotta figure out how to handle when something does not yet exist but will be later
type Props = {
  gridSize: any;
};

const BoardGrid:React.FC<Props>  = ({ gridSize } ) => {
  const [numberBoxes, numberBoxesTask] = useState<any>()

  useEffect(() => {
    const numBox = Array.from(Array(gridSize.totalSquares).keys())
    numberBoxesTask(numBox)
  }, [gridSize]);

  return (
    <>
    {numberBoxes && 
      <div className='grid-container' style={{ gridTemplateColumns: `repeat(${gridSize.rows}, 52px)` }}>
        {numberBoxes.map((n: number) => <GridBox key={n} gridNo={n}/>)}
      </div>
    }
    </>
  )
}

export default BoardGrid