import './App.css';
import ClueDetails from "./ClueDetails";
import {useState} from "react";
import clues from "./clues";
import UserInput from "./UserInput";

function App() {
	const [currentClue, setCurrentClue] = useState(clues[0]);

	//Updates the currentClue state. Used as a callback in child components.
	function updateClue(clueName) {
		const newClue = clues.find(clue => clue.name === clueName);
		setCurrentClue(newClue);
	}

	return (
		<div className="App">
			<ClueDetails clue={currentClue}/>
			<UserInput clue={currentClue} clueSelect={updateClue}/>
		</div>
	);
}

export default App;
