import React from "react"
import FloorSelectorButtons from "./FloorSelectorButtons"
import ScaleButtons from "./ScaleButtons"

interface MapControlsProps {
  selectedFloor: number
  setSelectedFloor: (floor: number) => void
  floors: number[]
  onZoomIn: () => void
  onZoomOut: () => void
  onReset: () => void
}

const MapControls: React.FC<MapControlsProps> = ({
  selectedFloor,
  setSelectedFloor,
  floors,
  onZoomIn,
  onZoomOut,
  onReset,
}) => {
  return (
    <div>
      <FloorSelectorButtons
        floors={floors}
        selectedFloor={selectedFloor}
        onFloorSelect={(floor) => setSelectedFloor(floor)}
      />
      <div className="mt-4">
        <ScaleButtons onZoomIn={onZoomIn} onZoomOut={onZoomOut} onReset={onReset} />
      </div>
    </div>
  )
}

export default MapControls
