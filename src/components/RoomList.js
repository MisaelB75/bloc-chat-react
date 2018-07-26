import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      newRoom: ""
    }
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key = snapshot.key;
    this.setState({ rooms: this.state.rooms.concat( room ), newRoom: "" })
    });
  }

  createRoom(e) {
    e.preventDefault();
    if (!this.state.newRoom) { return }
    this.roomsRef.push({
      name: this.state.newRoom
    });
  }

  handleChange(event) {
    this.setState({ newRoom: event.target.value });
  }

  render() {
    return (
    <section className="chat-rooms">
      <ul>
        {
          this.state.rooms.map( (chatroom, index) =>
           <li className="room" key = {index} onClick={(e) => this.handleClick(chatroom.name, chatroom.key)} >
             {chatroom.name}
           </li>
          )
        }
      </ul>

     <form className="roomForm" onSubmit={(e) => this.createRoom(e) }>
      <input className="newRoomName" type="text" placeholder="Enter New Room Name" value={this.state.newRoom} onChange={ (e) => this.handleChange(e) }></input>
      <input type="submit" value="Submit"></input>
     </form>
    </section>
    );
  }
}

export default RoomList;
