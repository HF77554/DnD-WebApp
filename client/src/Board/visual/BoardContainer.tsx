import React, {useState} from 'react'
import BoardGrid from './BoardGrid'
import CreationMenu from './CreationMenu'
import {mapSize} from '../types/BoardTypes'

const Container = () => {
  const [gridSize, gridSizeTask] = useState<mapSize>()

  const mapCriteria = (grid:mapSize) => {
    gridSizeTask(grid)
  }

  return (
    <div>
        <CreationMenu onSelection={mapCriteria}/>
        {gridSize && <BoardGrid gridSize={gridSize}/>}
    </div>
  )
}

export default Container