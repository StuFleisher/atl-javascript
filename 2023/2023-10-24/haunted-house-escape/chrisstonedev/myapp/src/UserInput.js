import {useState, useEffect} from "react";

function UserInput({room, roomSelect}) {
	const [formData, setFormData] = useState({roomSelect:room.exits[0]});
	console.log("rendering userInput, formData:", formData);

	useEffect(function updateFormOnRoomChange(){
		setFormData({roomSelect:room.exits[0]})
	},[room])

	function handleChange(evt) {
		const {name, value} = evt.target;
		setFormData(fData => ({
			...fData,
			[name]: value,
		}));
	}

	function handleSubmit(evt) {
		evt.preventDefault();
		roomSelect(formData.roomSelect);
	}

	return (
		<form className="UserInput">
			<label htmlFor="roomSelect">Where do you go next?</label>
			<p>
				<select name="roomSelect" value={formData.roomSelect} onChange={handleChange}>
					{
						room.exits.map(exit => {
							return (<option key={exit} value={exit}>{exit}</option>)
						})
					}
				</select>
				<button onClick={handleSubmit}>Go to the {formData.roomSelect}</button>
			</p>
		</form>
	);
}

export default UserInput;