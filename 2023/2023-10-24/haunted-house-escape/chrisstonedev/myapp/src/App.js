import './App.css';
import Room from "./Room";
import {useState} from "react";
import rooms from "./rooms";
import UserInput from "./UserInput";

function App() {
	const [currentRoom, setCurrentRoom] = useState(rooms[0]);
	// console.log("Rendering app. CurrentRoom=", currentRoom)
	// console.log(rooms.map(r=>r.name));

	function updateCurrentRoom(roomName) {
		const newRoom = rooms.find(room => room.name === roomName);
		// console.log(newRoom);
		setCurrentRoom(newRoom);
	}

	return (
		<div className="App">
			{currentRoom ? <Room room={currentRoom}/> : ""}
			<UserInput room={currentRoom} roomSelect={updateCurrentRoom}/>
		</div>
	);
}

export default App;
