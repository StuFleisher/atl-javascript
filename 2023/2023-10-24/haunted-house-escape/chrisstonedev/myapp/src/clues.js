	//Data here isn't structured how I'd like it, but it works in a quick project
	const rooms = [
		{
			name: 'King Manor',
			description: `
				As you step onto the grand estate, the manor stands before you, a testament to both opulence and decay. The once pristine walls now bear the marks of time, and the air is filled with the faintest whispers of days long past. The surrounding grounds, though overgrown, still hint at the meticulous care they once received, a silent tribute to the manor's former glory.

				Rumors and tales of the manor's history swirl in your mind, stories heard in hushed tones in local taverns and snippets read in faded newspapers. They speak of the King family, a couple of wealth and stature. Yet, for all its splendor, the estate also carries an air of mystery and loss, with whispers of the husband's descent into solitude following his wife's untimely departure from this world.

				With a sense of curiosity and an unexplained pull towards the stories hidden within these walls, you find yourself at the threshold of a journey through time and memory. The manor awaits, ready to reveal its secrets to those brave enough to delve into its past.

				Your adventure begins in the Courtyard, a once vibrant hub of activity now surrendered to the whims of nature, where the echoes of the past intertwine with the rustle of leaves in the wind.
				`,
			exits: ['Courtyard'],
			details: ['Gate'],
			imgUrl: '/images/Start.jpg',
			altText: 'The grand manor stands in silent testament to its former glory, surrounded by overgrown grounds and whispering tales of the past.'
		},
		{
			name: 'Gate',
			description: `
				The grand wrought iron gate stands tall, its craftsmanship highlighting the once grand stature of King Manor. Time and nature have left their marks, with vines partially obscuring an intricate engraving at the center: "King Manor." Despite the wear, the engraving stands as a testament to the legacy of the estate and the family that once lived here.
			`,
			exits: ['Courtyard'],
			imgUrl: '/images/Gate.jpg',
			altText: 'A towering wrought iron gate, partially concealed by overgrown vines, with "King Manor" engraved at the center.'
		},
		{
			name: 'Courtyard',
			description: `
				Once meticulously maintained, the courtyard now stands wild and untamed, a stark contrast to its former glory. Vines climb the walls, weaving through cracks that tell silent stories of years gone by. The flagstone path, cracked and overgrown, invites you to explore this outdoor sanctuary. In the center, a forgotten fountain stands, dry and silent. The air here is fresh, carrying whispers of laughter and soft murmurs from a time long past.
				Exits lead to the garage, filled with silent machinery; back into the foyer, the heart of the manor; and into the hedge maze, a labyrinth of secrets waiting to be uncovered.
			`,
			imgUrl: '/images/Courtyard.jpg',
			exits: ['Garage', 'Foyer', 'Hedge Maze'],
		},
		{
			name: 'Foyer',
			description: `
				The entrance to the manor wraps you in faded grandeur and silent tales waiting to be told. The vaulted ceiling, once a canvas of artistry, now hangs above, marred by time. Broken chandeliers cast trembling shadows across worn floorboards, and remnants of once-lavish wallpaper hang from the walls. A grand staircase, its steps cracked and worn, stands draped in webs, a silent witness to bygone times. Flickering candelabras create a dance of light and shadow, and in the center, a fractured mirror stands, its reflection distorted, holding secrets just out of reach.
				Paths lead back to the Courtyard, bathed in moonlight, and to the Grand Hall, filled with subdued echoes of the past.
			`,
			imgUrl: '/images/Foyer.jpg',
			exits: ['Grand Hall', 'Courtyard'],
		},
		{
			name: 'Grand Hall',
			description: `
				The Grand Hall greets you with an aura of solemn majesty, filled with echoes from celebrations long past. Faded tapestries adorn the walls, telling silent stories, while dim chandeliers cast a ghostly glow. The air is thick with the scent of aged wood and whispers from another era.
				The hall serves as a crossroads, with paths leading to the manifold secrets of the manor. To the left, the silent Ballroom awaits; to the right, the Dining Room stands frozen in time; directly ahead, the Study invites you in, a sanctum filled with knowledge and whispers; and behind, the Foyer lingers, filled with faded memories.
			`,
			imgUrl: '/images/The-Grand-Hall.jpg',
			details: ['War Medals'],
			exits: ['Dining Room', 'Foyer', 'Study', 'Ballroom'],
		},
		{
			name: 'War Medals',
			description: `
				Displayed prominently in a glass case in the Grand Hall are a series of war medals, each shining dimly under the faint light. The medals are well-kept, though the ribbons holding them are slightly faded from time.

				As you take a closer look, you notice a small plaque at the bottom of the case. It reads, "Awarded to Graham King for Bravery and Service." The medals, symbols of honor and sacrifice, hint at a past filled with turmoil and violence. You can almost feel the weight of the battles Graham must have faced, and the injuries he sustained in service.

				The medals stand not only as a testament to his courage but also as a silent reminder of the pain he carried home with him, a pain that would shape the course of his life and the history of this manor.
			`,
			exits: ['Grand Hall'],
			imgUrl: '/images/War-Medals.jpg',
			altText: 'A set of war medals displayed in a glass case, awarded to Graham King for his bravery and service in the war.'
		},
		{
			name: 'Dining Room',
			description: `
				The Dining Room, once the heartbeat of grand celebrations, now stands frozen in time. The grand table, meticulously set yet draped in a veil of dust, is surrounded by chairs that echo silent stories of gatherings past. The chandeliers above, their brilliance now dimmed, cast a spectral light across the room, creating eerie shadows that dance with forgotten joy.
				The air is thick with the ghost of lavish feasts, a stark contrast to the quiet that now reigns. This space, which once resounded with laughter and togetherness, has transformed into a sanctuary of memories and bygone moments.
				Doorways beckon you to the Grand Hall, filled with echoes of the past; the Lounge, once a hub of lively chatter; and the Kitchen, holding secrets of shared meals and quiet conversations.
			`,
			imgUrl: '/images/Dining-Room.jpg',
			exits: ['Grand Hall', 'Lounge', 'Kitchen'],
		},
		{
			name: 'Lounge',
			description: `
				Entering the Lounge, you are met with an overwhelming sense of nostalgia, as if the walls themselves hold tales of joyous gatherings. The once vibrant curtains, now faded from time’s embrace, hang heavily, casting a melancholy glow. Dust-covered furniture stands as a testament to luxury that once was, while the cold fireplace, its embers long gone, speaks of warmth and companionship now lost.
				Bookshelves line the walls, holding volumes of forgotten stories and silent whispers from the past.
				Exits lead to the bustling memories of the Servant Quarters; the Infirmary, a space of recovery and loss; and back to the Dining Room, where echoes of celebratory feasts still faintly linger.
			`,
			imgUrl: '/images/Lounge.jpg',
			details:['Doctor\'s Note'],
			exits: ['Servant Quarters', 'Infirmary', 'Dining Room'],
		},
		{
			name: 'Doctor\'s Note',
			description: `
				A fragile piece of paper lies behind the bar in the lounge. Picking it up, you notice it’s a note from a doctor, addressed to Graham. The doctor expresses deep concern for Eleanor’s deteriorating health and suggests seeking further medical advice and assistance. The tone is serious and empathetic, urging Graham to prioritize Eleanor’s needs and consider the potential severity of her condition. The date on the note places this communication during the last few months of Eleanor’s life.
			`,
			exits: ['Lounge'],
			imgUrl: '/images/Doctors-Note.jpg'
		},
		{
			name: 'Servant Quarters',
			description: `
				This cramped yet once vibrant space is steeped in memories of diligence and quiet camaraderie. The air seems to pulse with echoes of hurried footsteps and hushed, supportive conversations. The bunks, lined against the walls, are worn but hold stories of resilience and dedication. A small window, now dusty, once allowed glimpses of a world outside, offering brief respite to those who toiled within.
				A faint feeling of gratitude washes over you as you stand here, recalling moments of unseen support and tireless dedication that kept your world afloat.
				Exits lead to the Lounge, a space of stolen rest and laughter; the Kitchen, the bustling heart of daily life; and the Garage, a silent tribute to progress and past aspirations.
			`,
			exits: ['Lounge', 'Kitchen', 'Garage'],
			imgUrl: '/images/Servant-Quarters.jpg',
			altText: 'A dimly lit, cramped space with worn bunks lining the walls, embodying a sense of past diligence and quiet camaraderie.'
		},
		{
			name: 'Garage',
			description: `
				The expansive Garage now stands silent, a mausoleum of innovation and ambition. Cobwebs connect the dormant vehicles, and a layer of dust has settled over what were once symbols of progress and status. The air is filled with the faint, ghostly scent of leather and the echo of engines long silenced.
				A pang of nostalgia hits as you recall the thrill of new ventures and the pride of success that this space once represented. Yet, it also brings a twinge of sorrow, a reminder of times gone and dreams left behind.
				From this realm of quiet reminiscence, you can return to the Servant Quarters, back to the remnants of daily hustle; move forward to the Courtyard, where the outside world has crept back in; or stay a while longer, lost in the echoes of what once was.
			`,
			details: ['Old Ledger Book'],
			exits: ['Servant Quarters', 'Courtyard'],
			imgUrl: '/images/Garage.jpg',
			altText: 'A spacious garage filled with dust-covered vehicles, standing silent yet filled with echoes of innovation and ambition.'
		},
				{
					name: 'Old Ledger Book',
					description: `
						Amongst the relics of the past, you find a leather-bound ledger book, its cover cracked and worn. The pages inside, yellowed with age, are filled with meticulous records of transactions, investments, and business dealings from Graham's manufacturing empire. As you flip through, you notice the numbers growing larger, the transactions more frequent, and then suddenly, a stark change. The entries become sparse, the numbers dwindle, and the once orderly handwriting becomes shaky and uncertain.
					`,
					exits: ['Garage'],
					imgUrl: '/images/Old-Ledger-Book.jpg',
					altText: 'A well-used ledger book, now worn with age, containing the financial history of Graham’s manufacturing business.'
				},
		{
			name: 'Hedge Maze',
			description: `
				As you step into the Hedge Maze, a sense of disorientation and wonder envelops you. The hedges tower above, creating a labyrinth filled with secrets and whispers from the past. The air is alive with the sound of rustling leaves, each gust of wind carrying faint echoes of laughter and distant conversations.
				As you wander through the maze, flashes of memory flood back to you—moments of joy and companionship, stolen kisses hidden by the green foliage, and the thrill of finding each other amidst the confusion. These memories are fleeting, like the breeze that stirs the leaves, and leave you with a sense of longing and nostalgia.
				The ground beneath your feet bears the marks of countless steps, a testament to the countless hours spent in the company of a loved one, finding joy in the simple act of losing and finding one’s way.
				From this realm of twisted paths and hidden memories, exits lead back to the Courtyard, the starting point of many an adventure; to the Gardens, where beauty and memories intertwine; and to the Conservatory, a sanctuary of forgotten flora and past care.
			`,
			exits: ['Courtyard', 'Gardens', 'Conservatory'],
			imgUrl: '/images/Hedge-Maze.jpg',
			altText: 'An intricate labyrinth of towering hedges, creating a world of secrets, memories, and echoes of the past.'
		},
		{
			name: 'Gardens',
			description: `
				The Gardens, a sanctuary of color and life, unfold before you in stark contrast to the rest of the manor. Vibrant flowers bloom unabashedly, their petals dancing in the gentle breeze, and tall trees offer their shade and whispers of times gone by. The air is sweet and heavy with the scent of a myriad of blooms, creating an atmosphere of peace and reminiscence.
				As you wander along the stone path that weaves its way through this floral haven, flashes of tender moments and shared glances flood your senses. You can almost feel the warmth of a hand in yours and hear the soft laughter that once echoed through these grounds. This place, more than any other, is steeped in memories of love, joy, and an inexplicable sense of loss.
				Yet, despite the overwhelming beauty, there is a tangible sense of melancholy that hangs in the air, a silent tribute to a love that once was and is no more. It’s almost as if the garden itself mourns, its vibrant colors tinged with sadness.
				From this bittersweet haven, exits lead back into the Hedge Maze, with its twisted paths and hidden secrets; to the Conservatory, a treasure trove of exotic flora; to the Gazebo, a quaint and quiet retreat; and to the Crypt, a place of final rest and poignant remembrance.
			`,
			details: ['Overgrown Rose Bush'],
			exits: ['Hedge Maze', 'Conservatory', 'Gazebo'],
			imgUrl: '/images/Gardens.jpg',
			altText: 'Lush gardens filled with vibrant flowers and towering trees, a place of beauty, memories, and hidden sorrows.'
		},
		{
			name: 'Overgrown Rose Bush',
			description: `
				A once-majestic rose bush has spread its branches wide, its vibrant blooms now tangled amidst thorns and leaves. What used to be a deliberate part of the garden’s design now appears wild and untamed. As you take a closer look, you notice a faint trail behind the bush, as if the foliage is hiding something just out of sight.
			`,
			exits: ['Crypt'],
			imgUrl: '/images/Overgrown-Rose-Bush.jpg',
			altText: 'A wild and untamed rose bush, with a faint trail visible behind it.'
		},
		{
			name: 'Gazebo',
			description: `
				Tucked away in the heart of the flourishing gardens, the gazebo stands, an unfinished testament to dreams and dedication. The structure, while elegant, bears the marks of incompletion, with tools still resting where they were last placed, as if awaiting the return of the artisan’s hand. The wrought-iron benches, though cold and unused, seem to hold the memory of a creator’s touch, and the floorboards creak softly, almost as if sighing with unfulfilled potential.
				Standing here, surrounded by the sweet scent of blooming flowers, you’re engulfed by flashes of inspiration, determination, and an unforeseen halt—a project left tantalizingly close to completion. The wind carries whispers of encouragement and words left unsaid, weaving a poignant tapestry of what once was and what could have been.
				As the reality of the space settles around you, the air seems to thicken with a blend of pride, sorrow, and the lingering essence of unfulfilled promise. It’s an intimate space, strangely comforting yet tinged with the bittersweet ache of potential just out of reach.
				From this quiet retreat, you can choose to return to the vibrant life of the gardens, filled with color and memories, or move forward to the bedroom, a space that holds the faint echoes of shared laughter, intimate whispers, and the ghosts of a life lived.
			`,
			details: ['Old Love Letters'],
			exits: ['Gardens', 'Bedroom'],
			imgUrl: '/images/Gazebo.jpg',
			altText: 'A partially finished gazebo nestled in a lush garden, bearing the elegance of past dreams and the silence of unfinished work.'
		},
		{
			name: 'Old Love Letters',
			description: `
				Hidden beneath a loose floorboard in the gazebo, you find a small, weathered box. Inside, there is a collection of delicate, handwritten letters. As you carefully unfold one, you notice the elegant script of Eleanor King. She writes passionately about the days and nights spent nursing Graham back to health after his return from the war. Her words are filled with love and devotion, painting a vivid picture of their deep connection and the strength of their bond. The letters serve as a testament to their enduring love, surviving the test of time and the hardships of life.
			`,
			exits: ['Gazebo'],
			imgUrl: '/images/Old-Love-Letters.jpg',
			altText: 'A collection of old love letters written by Eleanor King.'
		},
		{
			name: 'Bedroom',
			description: `
				The bedroom, once a sanctuary of love and comfort, now stands as a poignant reminder of what once was. The bed, adorned with faded linens, holds the imprint of countless nights, some filled with laughter and tender whispers, others with restless turmoil. The walls, once vibrant, now bear the subtle scars of time and grief, with streaks of faded wallpaper and discolored patches telling silent stories of sorrow and yearning.
				On one side of the room, a worn-out chair sits beside a small table, the remnants of a once cherished reading nook, now gathering dust. The air is heavy with the scent of aged wood and lingering perfume, a bittersweet blend of the past’s sweetness and the sharp tang of loss.
				As you stand there, the room seems to come alive with flashes of memories—a mix of joyful embraces and tearful nights, of whispered love and the heavy silence of absence. The space holds the duality of love's embrace and the solitude of loss, painting a vivid picture of a heart both cherished and broken.
				Exits lead back to the gazebo, a space touched by dreams and unfinished work, and to the study, a realm of knowledge and the remnants of a mind unraveling.
			`,
			details:['Faded Photograph', 'Rose Drawing'],
			exits: ['Gazebo', 'Study'],
			imgUrl: '/images/Bedroom.jpg',
			altText: 'A bedroom filled with the remnants of love and loss, with faded linens, a worn-out reading nook, and walls that tell silent stories.'
		},
		{
			name: 'Faded Photograph',
			description: `
				Tucked away in a corner of the room, you find a small, faded photograph. It captures a candid moment of a young couple, laughing and seemingly lost in their own world. The joy in their expressions is palpable, a stark contrast to the somber atmosphere of the bedroom. On the back of the photograph, in delicate handwriting, it reads "Graham & Eleanor, Summer of 1925 - To endless laughter and countless adventures together, my love."
			`,
			exits: ['Bedroom'],
			imgUrl: '/images/Faded-Photograph.jpg',
			altText: 'A small, faded photograph capturing a candid and joyful moment between Graham and Eleanor.'
		},
		{
			name: 'Rose Drawing',
			description: `
				On a small table near the window, you find a delicate drawing of a rose, expertly rendered in soft pencil strokes. Beside the drawing, there's a note written in a graceful hand, "For my beloved Eleanor, your favorite." The intimacy of the note and the care taken in the drawing suggest a deep affection. It seems roses held a special place in Eleanor’s heart.
			`,
			exits: ['Bedroom'],
			imgUrl: '/images/Rose-Drawing.jpg'
		},
		{
			name: 'Study',
			description: `
				This once sacred space of thought and contemplation now bears the scars of isolation and a mind unraveling. Shelves filled with ancient books seem to loom over the room, their titles blurred, as if refusing to give up their secrets. The air is stifling, heavy with the musk of old paper and a faint, unsettling undercurrent of despair.
				The desk, positioned solemnly in the center, is cluttered with papers, ink stains, and a chaotic sprawl of notes. Amidst the disarray, a handwritten letter, the ink faded and paper yellowed, stands out. Its words, though difficult to discern, speak of love lost, desperation, and a mind teetering on the edge. The handwriting, shaky and frantic, gives a glimpse into the abyss that once consumed the room's occupant.
				The room seems to pulse with an eerie energy, as if the walls themselves are whispering tales of brilliance turned to madness, of isolation disguised as dedication.
				Exits lead to the Grand Hall, echoing with the distant sounds of a life once lived; the Infirmary, a place of respite and tragedy; and the Bedroom, a space of contrasting tranquility and hidden sorrow.
			`,
			details: ['Graham’s Journal'],
			exits: ['Grand Hall', 'Infirmary', 'Bedroom'],
			imgUrl: '/images/Study.jpg',
			altText: 'A study filled with ancient books, cluttered papers, and the heavy aura of knowledge turned to obsession.'
		},
		{
			name: 'Graham’s Journal',
			description: `
				On the cluttered desk in the center of the room, you find an old, worn journal. The cover is made of weathered leather, and it's clear that the book has seen better days. Opening it up, the pages are filled with Graham’s looping handwriting. The words spill out, raw and unfiltered, revealing his deepest thoughts and emotions.

				In the later entries, he writes extensively about Eleanor, expressing a profound sense of loss and longing. “The manor feels empty without her laughter filling the halls. I find myself wandering to the garden, hoping to catch a glimpse of her amongst the flowers,” one entry reads. He talks about his desire to join her, to find solace in the garden where they shared so many happy moments.

				The final entry is a heartfelt message to Eleanor, telling her how much he loves her, and how he hopes to find her in the garden once more. The ink is smudged in places, as if tears had fallen onto the pages.
			`,
			exits: ['Study'],
			imgUrl: '/images/Grahams-Journal.jpg',
			altText: 'An old, worn journal filled with Graham’s personal writings, expressing his deep sense of loss and longing for Eleanor.'
		},
		{
			name: 'Infirmary',
			description: `
				This small, intimate space is filled with echoes of care and gentle whispers of recovery. The bed, though now empty, carries the indentations of a body once weighed down by the ravages of war. The walls, painted a calming shade, seem to hold stories of resilience and quiet strength.
				A mirror, tarnished by time, hangs above the bed, having reflected the many faces of comfort and concern that once filled the room. You can almost see the fleeting image of a woman, her expression a mix of determination and affection, as she tends to the wounded.
				The air is laden with the faint scent of antiseptics and homemade remedies, a testament to the healing that took place within these walls. It's a space that, despite its current emptiness, resonates with the love and care that was once its lifeblood.
				Exits lead back to the Lounge, where laughter and lively conversations once provided a stark contrast to the Infirmary's quietude, and to the Study, a space of knowledge turned to isolation.
			`,
			details: ['Antique Mirror'],
			exits: ['Lounge', 'Study'],
			imgUrl: '/images/Infirmary.jpg',
			altText: 'A small, intimate infirmary, with an old bed and a tarnished mirror, filled with echoes of past care and recovery.'
		},
		{
			name: 'Antique Mirror',
			description: `
				The wall opposite the bed holds an antique mirror in a delicate, ornate frame. Its glass, though slightly tarnished with age, provides a clear reflection. As you gaze into it, expecting to see remnants of the infirmary’s past, the image shifts. You see Graham King, younger and full of worry, tending to a woman lying in the bed. Her face is flushed with fever, and concern etches his features as he holds a cool cloth to her forehead. The memory is so vivid, so full of emotion, that it feels almost as if you are there in the room with them.
			`,
			exits: ['Infirmary'],
			imgUrl: '/images/Antique-Mirror.jpg',
			altText: 'An ornate antique mirror, capturing a poignant memory from the past.'
		},
		{
			name: 'Kitchen',
			description: `
				Once the bustling heart of the manor, the kitchen now stands silent, the remnants of its former glory evident in the tarnished pots and pans that hang from the walls. The faint scent of herbs and spices lingers in the air, a ghostly reminder of feasts once prepared with care and precision.
				Yet, as you stand in the midst of what used to be a hive of activity, there's an undeniable undercurrent of concern and whispered worries. The walls seem to carry the faint echoes of hushed conversations, as the staff shared their fears over the man of the house, his mind unraveling, his refusal to eat becoming the topic of hushed, worried conversations.
				You feel a chill run down your spine as a wave of recognition washes over you, the familiarity of this space intertwining with the whispers of the past, creating a tapestry of memories and unspoken fears.
				From here, exits lead to the Servant Quarters, where the staff once retreated to after their tireless efforts; the Dining Room, where the grand banquets now stand untouched; and back into the winding paths of the manor’s stories.
			`,
			exits: ['Servant Quarters', 'Dining Room', 'Grand Hall'],
			details: ['Herbal Remedies'],
			imgUrl: '/images/Kitchen.jpg',
			altText: 'A once bustling kitchen, now silent, with tarnished pots and pans, and lingering scents of herbs and spices.'
		},
		{
			name: 'Herbal Remedies',
			description: `
				Scattered across the kitchen counters are various dried herbs, mortars and pestles, and small, handwritten notes. Upon closer inspection, you realize these are remnants of homemade herbal remedies. The notes detail different herb combinations, steeping times, and dosages, all meticulously written in Eleanor’s handwriting. Some of the remedies are labeled for easing pain, others for promoting sleep, and a few for boosting energy. It’s evident that someone was desperately trying to alleviate suffering with these herbal concoctions.
			`,
			exits: ['Kitchen'],
			imgUrl: '/images/Herbal-Remedies.jpg'
		},
		{
			name: 'Conservatory',
			description: `
				Encased in glass, the conservatory stands as a living museum, a lush expanse of plants from all corners of the globe. Sunlight dances through the panes, painting the ground with vibrant hues and intricate patterns. The air, warm and saturated with the fragrances of blooming flowers and earth, wraps around you like a comforting embrace.
				As you take in the beauty that surrounds you, a wave of nostalgia washes over, carrying with it a fleeting memory, sharp and poignant. A moment in time unfurls before your eyes – two figures, intimately entwined in conversation, their laughter ringing out amidst the foliage, filling the space with joy and love. The memory is gone as quickly as it came, leaving you with a sense of longing and a connection to a past just out of reach.
				Exits beckon you to the Gardens, a symphony of color and life; the Hedge Maze, with its enigmatic twists and turns; and the Ballroom, echoing with the ghosts of dances past.
			`,
			details: ['Socialite Magazine'],
			exits: ['Gardens', 'Hedge Maze', 'Ballroom'],
			imgUrl: '/images/Conservatory.jpg',
			altText: 'A lush conservatory filled with plants from around the world, bathed in sunlight and steeped in memories.'
		},
		{
			name: 'Socialite Magazine',
			description: `
				An old, faded magazine lies open, its pages yellowed with time. The glossy cover features a photograph of a grand ball, with elegantly dressed guests dancing under glittering chandeliers. The headline reads, "The Event of the Season at King Manor!" Flipping through the pages, you find an article detailing the lavish lifestyle and influential social circle of Graham and Eleanor King, the manor’s esteemed owners. The words paint a picture of prosperity and prominence, though the images of smiling faces seem distant and frozen in time.
			`,
			exits: ['Conservatory'],
			imgUrl: '/images/Socialite-Magazine.jpg',
			altText: 'An old socialite magazine featuring a story about Graham and Eleanor King.'
		},
		{
			name: 'Ballroom',
			description: `
				This ballroom, once the epitome of opulence and social splendor, stands silent, its glory days a mere whisper in the air. The grand chandeliers, now dulled with the passage of time, still hold a regal presence, casting their soft, somber light across the vast expanse. The floor, though lacking its former luster, holds the memories of countless footsteps, twirls, and laughter.
				As you move through the space, the air comes alive with the phantom sounds of orchestras playing and people laughing, a testament to the grand parties that once defined the social pinnacle of the house’s inhabitants. A vision flashes before your eyes – you, at the center of it all, dancing with a partner whose eyes sparkle with joy and whose laughter rings out, harmonizing with the music. The image fades as quickly as it appeared, leaving a void filled with nostalgia and a sense of times lost.
				The exits beckon, leading to the Conservatory, a sanctuary of nature’s calm; and the Grand Hall, a place where past and present intertwine.
			`,
			exits: ['Conservatory', 'Grand Hall'],
			imgUrl: '/images/Ballroom.jpg',
			altText: 'The grand ballroom, once a venue of lavish parties and dances, now stands quiet, basking in the memories of its glorious past.'
		},
		{
			name: 'Crypt',
			description: `
				As you descend into the crypt, the atmosphere shifts, enveloping you in a shroud of solemnity and introspection. The walls, made of aged stone, bear the marks of time, and the air is laden with a profound silence, interrupted only by the faint echoes of whispered goodbyes and tears shed in remembrance.
				The space is filled with the essence of lives once lived, stories that found their conclusion within these sacred confines. Your steps are guided, almost as if by an invisible force, toward a particular corner of the crypt. And there, amidst the resting places of those long gone, your gaze falls upon a tombstone that seems both foreign and familiar. The inscription, though worn by the ravages of time, is legible enough to send a jolt through your ethereal form — it bears your name.
				In that moment, clarity pierces through the fog of forgotten memories. The realization hits you like a tidal wave: you are Graham, and this manor has been holding onto your story, waiting for the moment when you’d be ready to uncover the truth. Your journey through these rooms, through the echoes of your past, has led you here, to the final piece of the puzzle.
				`,
			exits: ['Finish','Gardens'],
			imgUrl: '/images/Crypt.jpg',
			altText: 'The crypt, a space of quietude and remembrance, revealing the final resting place of Graham, the protagonist.'
		},
		{
			name: 'Finish',
			description: `
				As the revelation of your identity sinks in, a cascade of memories flood your consciousness, painting a vivid picture of your final days. You were Graham, a man of wealth and stature, yet haunted by the specter of loss and loneliness. Eleanor, the love of your life, had departed this world, leaving you to wander the halls of your once shared haven in solitude.

				You recall the moments of despair, the overwhelming grief, and the yearning for her presence. Your steps were heavy as you sought refuge in the gardens, Eleanor’s sanctuary, hoping to feel close to her once more. The flowers, vibrant and full of life, stood in stark contrast to the emptiness in your heart.

				In your final moments, you lay down amidst the blooms, beneath the open sky, longing for nothing more than to be next to Eleanor. You closed your eyes for the last time, surrendering to the peace that eluded you in life.

				Now, as the ghost of Graham, you find yourself drawn to a particular spot in the gardens. There, hidden amongst the flowers, lies Eleanor’s resting place. Without a moment’s hesitation, you lay down beside her, your spirit finally at peace. Together at last, the love that once flourished within the walls of the manor now transcends time, existing in a realm all its own.

				The story of Graham and Eleanor, a tale of love, loss, and reunion, finds its conclusion in the serene embrace of eternity.
				`,
			exits: ['King Manor'],
			imgUrl: '/images/Finish.jpg',
			altText: 'A final resting place, surrounded by blooming flowers, where the ghost of Graham reunites with Eleanor, finding peace at last.'
		}


];

export default rooms;