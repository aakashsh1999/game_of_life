import "slider-color-picker";
import { useDispatch } from 'react-redux'
import React, {useRef, useState, useLayoutEffect} from "react";
// import { saveGridState } from '../redux/slice/gameSlice';

function ColorPicker({ id, title, type }) {
    const ref = useRef();
    const [color, setColor] = useState("#ff0000");
  
    const onColorChange = (event) => {
      setColor(event.target.value);
    };
  
    useLayoutEffect(() => {
      ref.current.addEventListener("change", onColorChange);
    }, [ref]);
  
    return (
      <div className="App">
        <span>{title}</span>
        <slider-color-picker
          ref={ref}
          onChange={onColorChange}
        ></slider-color-picker>
        <div id="preview" style={{ background: color }}></div>
      </div>
    );
}

export default ColorPicker;