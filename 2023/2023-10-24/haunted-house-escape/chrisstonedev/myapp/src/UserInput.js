import {useState, useEffect} from "react";

/** Displays a menu for user navigation.
 *
 * PROPS:
 *
 * clue
		* A clue can represent a room
		* an object, or an event with information about the mystery, and looks like
		* this:
		*
		* {
		* 		name, 					>> Name for the page
		* 		description,		>> Text Description for display
		* 		exits, 					>> Array of rooms accessible from here
		*			details,				>> (Optional) Array of detail pages visible from here
		*	 		imgUrl, 				>> URL of image to display
		*	 		altText, 				>> Alt text for image to display
		* }
 *
 * roomSelect:
 		* A callback function which handles form submission
 *
 * App > UserInput
 */
function UserInput({clue, clueSelect}) {

	const [formData, setFormData] = useState(
		{clueSelect:(clue.exits[0])}
	);

	useEffect(function updateFormOnRoomChange(){
			setFormData({clueSelect:clue.exits[0]})
	},[clue])

	//handles changes to the form
	function handleChange(evt) {
		const {name, value} = evt.target;
		setFormData(fData => ({
			...fData,
			[name]: value,
		}));
	}

	//handles form submission
	function handleSubmit(evt) {
		evt.preventDefault();
		clueSelect(formData.clueSelect);
	}

	return (
		<form className="UserInput">
			<label htmlFor="clueSelect">What is your next move?</label>
			<p>
				<select name="clueSelect" value={formData.clueSelect} onChange={handleChange}>
					{
						clue.exits.map(exit => {
							return (<option key={exit} value={exit}>Go to the {exit}</option>)
						})
					}
					{(clue.details)
					?
						clue.details.map(clue => {
								return (<option key={clue} value={clue}>Investigate the {clue}</option>)
							})
					:
						""
					}
				</select>
				<button onClick={handleSubmit}>{'>'}</button>
			</p>
		</form>
	);
}

export default UserInput;