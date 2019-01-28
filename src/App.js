import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { username: 'Franzi' },
      { username: 'Carl' }
    ]
  }


userInputHandler = (event) => {
  const newName = event.target.value;
  this.setState( {
    users: [
      { username: newName },
      { username: 'Carl' }
    ]
  } )
}

  render() {
    const style = {
      color: 'blue',
    }
    return (
      <div className="App" style={style}>
       <h1>The first assignment</h1>
       <UserOutput name={this.state.users[0].username}
       hobby={'Coding'}/>
       <p>Change the first users name:</p>
       <UserInput name={this.state.users[0].username} changed={this.userInputHandler}/>
       <UserOutput name={this.state.users[1].username}
       hobby={'Running'}/>
      </div>
    );
  }
}

export default App;
