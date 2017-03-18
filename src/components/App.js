import React from 'react';
import './App.css';
import RangeContainer from '../components/RangeContainer';
import InputContainer from '../components/InputContainer';
import CheckboxContainer from '../components/CheckboxContainer';
import StatusContainer from '../components/StatusContainer';

function App() {
    return (
      <div className="App">
        <div className="App-header">
            <StatusContainer/>
        </div>
        <div className="controls">
            <RangeContainer type="brightness" min="0" max="100" defaultValue="50"/>
            <RangeContainer type="saturation" min="-100" max="100" defaultValue="0"/>
            <RangeContainer type="contrast" min="-100" max="100" defaultValue="0"/>
            <CheckboxContainer type="hflip" componentName="Horizontal Flip" />
            <CheckboxContainer type="vflip" componentName="Vertical Flip" />
            <InputContainer type="image_effect" />
        </div>
      </div>
    );
}

export default App;
