const rooms = [
	{
		name: 'Courtyard',
		description: `
		The once-manicured courtyard now lies wild and untamed, a testament to nature's resilience. Vines crawl up the walls, their tendrils weaving through cracks and crevices. The flagstone path, cracked and overgrown, leads you through the chaotic beauty of this outdoor sanctuary. In the center stands a forgotten fountain, its water long dried up. The air is fresh here, a welcome reprieve from the heavy atmosphere inside the manor.
		Exits lead to the garage, a realm of silent machines; back into the foyer, the manor’s somber heart; and into the hedge maze, a labyrinth of secrets and shadows.
		`,
		exits: ['Garage', 'Foyer', 'Hedge Maze'],
		imgUrl: '/images/Courtyard.jpg'
	},
	{
		name: 'Foyer',
		description: `
		The manor’s entrance envelops you in a realm of faded grandeur and forgotten tales. The vaulted ceiling, once a canvas of exquisite artistry, now looms above, its beauty marred by the passage of time. Broken chandeliers cast trembling shadows across the worn floorboards, and the remnants of lavish wallpaper hang limply from the walls.
		A grand staircase, its marble steps cracked and worn, stands at the room’s end, draped in a shroud of spider webs. The candelabras affixed to the walls flicker dimly, creating an ethereal dance of light and shadow. The air is dense with the fragrance of must and neglect, yet there is an underlying hint of something oddly familiar. In the heart of the room, a fractured mirror stands, its reflection distorted, almost as if it refuses to reveal the whole truth.
		Two exits present themselves: a path leading to the Courtyard, with moonlight streaming through its fractured panes, and another to the Grand Hall, its subdued ambiance hinting at the myriad of secrets nestled within the manor.
		`,
		exits: ['The Grand Hall', 'Courtyard'],
		imgUrl: '/images/Foyer.jpg'
	},
	{
		name: 'The Grand Hall',
		description: `
		Stepping into the Grand Hall, you are greeted by an ambiance of solemn majesty and echoes of bygone celebrations. The walls, adorned with faded tapestries, tell silent stories of the past, while the dimly lit chandeliers cast a soft, ghostly glow. The air is thick with the scent of aged wood and forgotten whispers.
		The hall serves as a crossroads, with pathways leading to the manifold secrets of the manor. To your left, the Ballroom awaits, its silent music and shadowy dance floor bearing witness to numerous festivities. To your right, the Dining Room opens up, its grand table now shrouded in dust and memories. Directly ahead, the Study invites you in, a sanctum of knowledge and whispers from the past. And behind you, the Foyer stands, a space of welcome and subtle revelations`,
		exits: ['Dining Room', 'Foyer', "Study", "Ballroom"],
		imgUrl: '/images/The-Grand-Hall.jpg'
	},
	{
		name: 'Dining Room',
		description: `
		The Dining Room unfolds before you, its grand table set for eternity, surrounded by the silent company of chairs draped in cobwebs. The chandeliers above, their luster long lost, bathe the room in a spectral light, casting eerie shadows across the silverware and glassware left untouched for years.
		The air carries the faintest hint of lavish feasts once enjoyed, now replaced by the lingering aroma of times long past. This room, once a hive of conversation and laughter, now stands as a monument to memories and lost moments.
		From here, doorways lead to the Grand Hall, the Lounge, and the Kitchen, each holding a piece of the manor’s intricate puzzle.
		`,
		exits: ['The Grand Hall', 'Lounge', "Kitchen"],
		imgUrl: '/images/Dining-Room.jpg'
	},
	{
		name: 'Lounge',
		description: `
		This room once buzzed with lively conversations and the clinking of glasses, a stark contrast to its current silence. Velvet curtains, now faded and frayed, drape heavily across the windows, filtering the light to a soft, eerie glow. The furniture, covered in a fine layer of dust, hints at luxury long lost. A fireplace stands cold and unused, its embers long extinguished. The walls, lined with bookshelves, bear the weight of forgotten stories.

		Exits lead to the servant quarters, filled with remnants of a bustling past; the trophy room, holding the manor's once-prized possessions; and back to the dining room, where echoes of feasts still linger.
		`,
		exits: ['Servant Quarters', 'Trophy Room', "Dining Room"],
		imgUrl: '/images/Lounge.jpg'
	},
	{
		name: 'Servant Quarters',
		description: `
		This cramped space tells a tale of servitude and seclusion. The air is thick with the memories of hurried footsteps and whispered conversations. Bunks line the walls, their mattresses worn and thin. A small, dusty window lets in a sliver of light, casting long shadows across the floor. The room bears witness to the tireless work of those who once kept the manor running.
		From here, you can proceed to the lounge, where servants once stole moments of rest; the kitchen, the heart of their bustling activity; or the garage, holding relics of bygone transportation.
		`,
		exits: ['Lounge', 'Kitchen', "Garage"],
		imgUrl: '/images/Servant-Quarters.jpg'
	},
	{
		name: 'Garage',
		description: `
		This expansive space, now silent and still, once housed the manor’s majestic carriages and automobiles. Cobwebs stretch from wheel to wheel, and dust cloaks the vehicles in a ghostly shroud. The air is stagnant, filled with the scent of aged leather and rust. Faint echoes of engines starting and doors slamming linger in the air.
		From this forgotten garage, you can venture back into the servant quarters, through to the courtyard, where nature has reclaimed her space, or remain amidst the relics of transportation."
		`,
		exits: ['Servant Quarters', 'Courtyard'],
		imgUrl: '/images/Garage.jpg'
	},
	{
		name: 'Hedge Maze',
		description: `
		This intricate labyrinth of hedges stands tall and imposing, casting long, twisted shadows across the ground. The air is filled with the whisper of rustling leaves, as if the maze itself is speaking. Every turn holds a mystery, every dead end a story untold. The ground beneath your feet is worn, a testament to the many who have wandered these paths before.
		From this maze of intrigue, you can find your way to the courtyard, the manor’s wild heart; the gardens, a space of untamed beauty; or the conservatory, a haven of forgotten flora.
		`,
		exits: ['Courtyard', 'Gardens', 'Conservatory'],
		imgUrl: '/images/Hedge-Maze.jpg'
	},
	{
		name: 'Gardens',
		description: `
		The gardens are a riot of color and life, a stark contrast to the faded grandeur of the manor itself. Flowers bloom in wild abundance, their petals vibrant and fragrant. Trees stand tall, their branches swaying gently in the breeze. The air is sweet here, filled with the scent of blooming flora. A stone path weaves through the gardens, leading you on a journey through nature’s bounty.
		Exits lead to the hedge maze, a realm of twisting paths; the conservatory, where flora from across the globe resides; the gazebo, a quaint retreat; and the crypt, a somber reminder of the manor’s history.
		`,
		exits: ['Hedge Maze', 'Conservatory','Gazebo','Crypt'],
		imgUrl: '/images/Gardens.jpg'
	},
	{
		name: 'Gazebo',
		description: `
		Nestled amidst the flourishing gardens, the gazebo stands as a quiet retreat, its structure bearing the elegance of a time long past. The wrought-iron benches are cold to the touch, and the floorboards creak softly with the faintest of breezes. It’s strangely comforting, familiar in a way you can’t quite place. The air is filled with the sweet scent of surrounding flowers, and as the wind rustles through the leaves, it almost sounds like whispered voices from another time.
		Exits lead back to the vibrant life of the gardens and onward to the bedroom, a space holding the faint echoes of laughter and quiet conversations.
		`,
		exits: ['Gardens', 'Bedroom'],
		imgUrl: '/images/Gazebo.jpg'
	},
	{
		name: 'Bedroom',
		description: `
		This once intimate space now stands silent, draped in layers of dust and faded memories. The bed, with its once-luxurious linens, now appears almost inviting, despite the years of neglect. The vanity is scattered with forgotten trinkets, each holding a story untold. As you move through the room, a glimpse of something familiar catches your eye in the mirror, but when you turn to look directly, it's gone. It’s a fleeting moment, yet it tugs at something deep within.
		Exits lead to the study, filled with the whispers of knowledge long forgotten, and back to the gazebo, a quiet retreat amidst the manor's wild beauty.
		`,
		exits: ['Study', 'Gazebo'],
		imgUrl: '/images/Bedroom.jpg'
	},
	{
		name: 'Study',
		description: `
		Shelves upon shelves of ancient tomes line the walls of this room, a sanctuary of knowledge and forgotten tales. The air is heavy with the scent of aged paper and worn leather. A desk sits in the center, cluttered with papers that seem to hold the remnants of fervent work. As you browse the titles, a handwritten letter catches your attention, the handwriting eerily familiar, though you can’t quite place why.
		Exits lead to the Grand Hall, where the manor’s stories intertwine; the trophy room, a gallery of past accomplishments; and the bedroom, a sanctuary of quietude and rest.
		`,
		exits: ['The Grand Hall', 'Trophy Room', 'Bedroom'],
		imgUrl: '/images/Study.jpg'
	},
	{
		name: 'Trophy Room',
		description: `
		Walls adorned with remnants of past glory fill this room, from faded ribbons to mounted accolades. Each tells a story of achievement and grandeur, though the details are lost to time. A sense of pride and accomplishment permeates the air, oddly resonating with something within you. The room, though filled with symbols of success, now stands silent, as if waiting.
		Exits lead to the lounge, once a space of relaxation and camaraderie; the study, a repository of knowledge; and the Grand Hall, where paths diverge and stories intertwine.
		`,
		exits: ['Lounge', 'Study'],
		imgUrl: '/images/Infirmary.jpg'
	},
	{
		name: 'Kitchen',
		description: `
		The heart of the manor's daily life, the kitchen holds the echoes of bustling activity and the warmth of shared meals. Pots and pans, once used to create feasts, now hang silent and tarnished. The scent of herbs and spices lingers faintly in the air, a ghost of culinary delights past. A chill runs down your spine as you realize the familiarity of this space, though you can’t quite place why.
		Exits lead to the servant quarters, a space of hustle and duty; the dining room, where banquets were once served; and back to the heart of the manor’s stories.
		`,
		exits: ['Servant Quarters', 'Dining Room'],
		imgUrl: '/images/Kitchen.jpg'
	},
	{
		name: 'Conservatory',
		description: `
		This glass-enclosed space is a haven for plants from every corner of the world. Sunlight filters through the panes, casting a kaleidoscope of shadows on the ground. The air is humid and filled with the scent of blooming flowers and fresh soil. As you wander through, a sense of peace settles over you, accompanied by a vague sense of nostalgia.
		Exits lead to the gardens, a riot of nature’s beauty; the hedge maze, with its twisting paths; and the ballroom, once a space of dance and celebration.
		`,
		exits: ['Gardens', 'Hedge Maze', 'Ballroom'],
		imgUrl: '/images/Conservatory.jpg'
	},
	{
		name: 'Ballroom',
		description: `
		Grandeur and elegance define this vast space, where the ghosts of grand parties and dances linger. The floor, once polished to a shine, now reflects the chandeliers’ dim light in muted tones. The air is thick with the faint sound of music and laughter, echoes of joyous celebrations. As you take it all in, a fleeting image of a dance partner, smiling and joyful, flashes before your eyes, leaving you with a bittersweet sense of loss.
		Exits lead to the conservatory, a lush oasis of greenery; and the Grand Hall, the crossroads of past and present.
		`,
		exits: ['Conservatory', 'The Grand Hall'],
		imgUrl: '/images/Ballroom.jpg'
	},
	{
		name: 'Crypt',
		description: `
		This underground sanctuary stands as a somber reminder of the manor’s history, its walls lined with the final resting places of those who once called it home. The air is cool and still, filled with the weight of memories and untold stories. As you explore, your eyes are drawn to a particular gravestone, worn by time but still standing strong. The name engraved upon it sends a shiver down your spine — it’s your own.
		In that moment, the pieces fall into place, and you realize that this manor holds more than just the stories of the past; it holds your story, too.
		`,
		exits: ['Gardens'],
		imgUrl: '/images/Crypt.jpg'
	},

];

export default rooms;