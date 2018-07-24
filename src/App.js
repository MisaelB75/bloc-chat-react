import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';


//<script src="https://www.gstatic.com/firebasejs/5.3.0/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDZwUwJ7F-hwB0slFLeznro2i5l-7gjDIU",
    authDomain: "blocchat-react-210ba.firebaseapp.com",
    databaseURL: "https://blocchat-react-210ba.firebaseio.com",
    projectId: "blocchat-react-210ba",
    storageBucket: "blocchat-react-210ba.appspot.com",
    messagingSenderId: "30938452332"
  };
  firebase.initializeApp(config);

  class App extends Component {
    render() {

      return (
        <div className="App">
          <header>
             <h1>Bloc Chat</h1>
          </header>
          <RoomList firebase={firebase} />
          <main>

          </main>
        </div>
      );
    }
  }

export default App;
