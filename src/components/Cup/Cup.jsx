import './Cup.css';
import image from '../../assets/wave.png';
import { useState } from 'react';

const MAX_WATER_LEVEL = 5;

const Cup = () => {
  const [draggingOver, setDraggingOver] = useState(false);
  const [waterLevel, setWaterLevel] = useState(0);

  const dragEnterHandler = event => {
    event.preventDefault();
    setDraggingOver(true);
  };

  const dragOverHandler = event => {
    event.preventDefault();
  };

  const dragLeaveHandler = () => setDraggingOver(false);

  const dropHandler = () => {
    setDraggingOver(false);
    if (waterLevel < MAX_WATER_LEVEL) {
      setWaterLevel(waterLevel => waterLevel + 1);
    }
  };

  const position = -70 * waterLevel + 350;

  const styles = {
    background: `url(${image}) 0px ${position}px repeat-x ${draggingOver ? '#c7e5ff' : 'transparent'}`
  }

  return (
    <div
      className="cup"
      style={styles}
      onDragEnter={dragEnterHandler}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
      onDrop={dropHandler}
    />
  );
};


export default Cup;