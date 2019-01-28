import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { username: 'Franzi',
        hobby: 'Coding' },
      { username: 'Carl',
        hobby: 'Running' }
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
       hobby={this.state.users[0].hobby}/>
       <p>Change the users name:</p>
       <UserInput name={this.state.users[0].username} changed={this.userInputHandler}/>
       <UserOutput name={this.state.users[1].username}
       hobby={this.state.users[1].hobby}/>
      </div>
    );
  }
}

export default App;
