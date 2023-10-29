function Room({room}) {

	console.log("Rendering room:",room)
	const {name,description,imgUrl}= room;

	const splitDescription = description.split("\n");
	console.log(name);

	return (
		<div className="Room">
			<h3 className="Room-name">{name}</h3>
			<img className="Room-image" src={imgUrl} alt={name}></img>
			<div className="Room-description">
				{splitDescription.map((s,i)=><p key={i}>{s}</p>)}
			</div>
		</div>
	)
}

export default Room;