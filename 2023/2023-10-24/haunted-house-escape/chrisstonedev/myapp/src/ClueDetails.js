
/** Displays a page with details about a clue.  A clue can represent a room
 * an object, or an event with information about the mystery, and looks like
 * this:
 *
 * {
 * 		name, 					>> Name for the page
 * 		description,		>> Text Description for display
 * 		exits, 					>> Array of clues accessible from here
 *	 	imgUrl, 				>> URL of image to display
 *	 	altText, 				>> Alt text for image to display
 * }
 *
 * App > ClueDetails
 */
function ClueDetails({clue}) {


	const {name,description,imgUrl}= clue;

	const splitDescription = description.split("\n");

	return (
		<div className="Clue">
			<h3 className="Clue-name">{name}</h3>
			<img className="Clue-image" src={imgUrl} alt={name}></img>
			<div className="Clue-description">
				{splitDescription.map((s,i)=><p key={i}>{s}</p>)}
			</div>
		</div>
	)
}

export default ClueDetails;