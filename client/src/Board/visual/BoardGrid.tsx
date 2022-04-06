import React from 'react'
import {mapSize} from '../types/BoardTypes'

//gotta figure out how to handle when something does not yet exist but will be later
type Props = {
  gridSize: any;
};

const BoardGrid:React.FC<Props>  = ({ gridSize } ) => {
  return (
    <div>BoardGrid</div>
  )
}

export default BoardGrid