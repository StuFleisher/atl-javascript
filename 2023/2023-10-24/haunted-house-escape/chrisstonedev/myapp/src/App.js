import './App.css';
import Room from "./Room";
import {useState} from "react";
import rooms from "./rooms";
import UserInput from "./UserInput";

function App() {
	const [currentRoom, setCurrentRoom] = useState(rooms[0]);
	console.log("Rendering app. CurrentRoom=", currentRoom)

	function updateCurrentRoom(roomName) {
		const newRoom = rooms.find(room => room.name === roomName);
		console.log(newRoom);
		setCurrentRoom(newRoom);
	}

	return (
		<div className="App">
			<Room description={currentRoom.description} exits=""/>
			<UserInput room={currentRoom} roomSelect={updateCurrentRoom}/>
		</div>
	);
}

export default App;
