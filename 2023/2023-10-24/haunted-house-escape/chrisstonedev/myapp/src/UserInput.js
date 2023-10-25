import {useState, useEffect} from "react";

function UserInput({room, roomSelect}) {
	const [formData, setFormData] = useState(room.exits[0]);

	function handleChange(evt) {
		console.log('handling change', evt);
		const {name, value} = evt.target;
		setFormData(fData => ({
			...fData,
			[name]: Number(value),
		}));
	}

	function handleSubmit(evt) {
		evt.preventDefault();
		roomSelect(formData);
	}

	return (
		<form>
			<label htmlFor="roomSelect">Select room</label>
			<select id="roomSelect" name="roomSelect" onChange={handleChange}>
				{
					room.exits.map(exit => {
						return (<option id={exit} value={exit}>{exit}</option>)
					})
				}
			</select>
			<button onClick={handleSubmit}>Move to room</button>
		</form>
	);
}

export default UserInput;