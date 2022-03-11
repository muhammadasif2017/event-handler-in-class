import React from 'react';
import ReactDOM from 'react-dom';
import bulbOn from './pic_bulbon.gif';
import bulbOff from './pic_bulboff.gif';
class House extends React.Component {
  state = {
    rooms: {
      kitchen: true,
      bathroom: false,
      livingRoom: true,
      bedroom: false,
      isLightOn: false,
    }
  };
  handleLight = () => {
    this.setState({ rooms: { isLightOn: !this.state.rooms.isLightOn }})
  }

  render() {

    return (
      <div>
        <div>
          <button onClick={this.handleLight}>Room 1</button>
        </div>
        <div>
          <button onClick={this.handleLight}>Room 2</button>
        </div>
        <div>
          <button onClick={this.handleLight}>Room 3</button>
        </div>
        <div>
          <button onClick={this.handleLight}>Room 4</button>
        </div>
        <div>
          { 
            this.state.rooms.isLightOn ? <img alt='Light On bulb' src={bulbOn} />
            : <img alt='Light Off Bulb' src={bulbOff} />
          }
        </div>

      </div>
      
    )
  }
}

ReactDOM.render(<House />, document.querySelector('#root'));