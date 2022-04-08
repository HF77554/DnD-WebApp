import React from 'react'
import './grid.css'

type Props = {
  gridNo: number;
};

const GridBox:React.FC<Props> = ({gridNo}) => {
  return (
    <div className='grid-box' onClick={() => console.log(gridNo)}>
      {gridNo}
    </div>
  )
}

export default GridBox