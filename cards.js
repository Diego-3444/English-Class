/* ============================================================
   WORLD TOUR — The English Adventure
   Card decks: 46 cards total
   modes: "speak" (timed oral task) | "write" (typed task) | "sprint" (quick fire)
   ============================================================ */

const CARDS = [
  /* ---------------- AIRPORT (7) — role-play & question forms ------------- */
  { t:"AIRPORT", mode:"speak", sec:90, pts:10,
    title:"Lost Luggage",
    task:"Your suitcase never arrived. Role-play with the player on your LEFT: you are the passenger, they are the airline agent. Ask at least 3 different questions.",
    focus:"Question forms · Complaining politely",
    lang:["Excuse me, could you help me?","When will it arrive?","What should I do now?"] },

  { t:"AIRPORT", mode:"speak", sec:60, pts:10,
    title:"Cancelled Flight",
    task:"Your flight is cancelled. Ask the agent for 3 alternatives. You must use “Could you…?”, “Is there…?” and “Would it be possible to…?”",
    focus:"Modals for polite requests",
    lang:["Could you put me on another flight?","Is there a later one?","Would it be possible to get a refund?"] },

  { t:"AIRPORT", mode:"speak", sec:60, pts:10,
    title:"Passport Control",
    task:"Answer these three officer questions in FULL sentences: 1) What is the purpose of your visit? 2) How long are you staying? 3) Do you have anything to declare?",
    focus:"Full-sentence answers · Present continuous for plans",
    lang:["I'm here on holiday.","I'm staying for two weeks.","No, I have nothing to declare."] },

  { t:"AIRPORT", mode:"sprint", sec:30, pts:10,
    title:"Terminal Sprint",
    task:"Name 8 things you can find in an airport. 30 seconds. No repeats, no Spanish.",
    focus:"Vocabulary: travel & places",
    lang:["gate","boarding pass","conveyor belt","security check"] },

  { t:"AIRPORT", mode:"speak", sec:60, pts:10,
    title:"First-Time Flyer",
    task:"Explain to someone who has never flown how to check in, step by step. Use: first, then, after that, finally.",
    focus:"Sequencing connectors · Giving instructions",
    lang:["First you go to the desk…","After that, you…","Finally, you board."] },

  { t:"AIRPORT", mode:"speak", sec:60, pts:10,
    title:"Ten Minutes Late",
    task:"Boarding closes in 10 minutes and you are still at security. Convince the gate agent to let you on the plane. Be persuasive, not rude.",
    focus:"Persuasion · Apologising",
    lang:["I'm terribly sorry, but…","I promise I'll be quick.","Is there any chance…?"] },

  { t:"AIRPORT", mode:"speak", sec:75, pts:10,
    title:"Seat Neighbour",
    task:"Ask the player on your RIGHT three PAST SIMPLE questions about the last trip they took. They must answer in full sentences.",
    focus:"Past simple questions (did + base form)",
    lang:["Where did you go?","Who did you travel with?","What did you enjoy most?"] },

  /* ---------------- RESTAURANT (7) — politeness & food language --------- */
  { t:"RESTAURANT", mode:"speak", sec:75, pts:10,
    title:"Three Courses",
    task:"Order a starter, a main course and a dessert from an imaginary menu. Use “I'd like…” and “Could I have…?” at least twice each.",
    focus:"Polite ordering · Food vocabulary",
    lang:["I'd like the soup, please.","Could I have it without onions?","For dessert, I'll have…"] },

  { t:"RESTAURANT", mode:"speak", sec:60, pts:10,
    title:"A Hair in the Soup",
    task:"There is a hair in your soup. Complain to the waiter — politely. If the group thinks you sounded rude, you get nothing.",
    focus:"Softeners · Diplomatic language",
    lang:["I'm afraid there's a problem.","Would it be possible to change it?","Sorry to bother you, but…"] },

  { t:"RESTAURANT", mode:"speak", sec:45, pts:10,
    title:"Guess My Dish",
    task:"Describe your favourite dish WITHOUT saying its name. The other players guess. 45 seconds.",
    focus:"Describing · Adjectives & ingredients",
    lang:["It's made of…","It tastes sweet / spicy.","You usually eat it with…"] },

  { t:"RESTAURANT", mode:"speak", sec:45, pts:10,
    title:"Fix the Waiter",
    task:"Say this sentence OUT LOUD, then correct it and explain the mistakes: “I would like two waters and a breads, please.”",
    focus:"Countable / uncountable nouns",
    lang:["two bottles of water","some bread","a loaf of bread"] },

  { t:"RESTAURANT", mode:"speak", sec:60, pts:10,
    title:"Local Recommendation",
    task:"Recommend a real restaurant in your city to a tourist. Say what it serves, how much it costs and why you like it. Minimum 5 sentences.",
    focus:"Recommending · Giving reasons",
    lang:["You should try…","It's famous for…","It's worth it because…"] },

  { t:"RESTAURANT", mode:"speak", sec:75, pts:10,
    title:"Take the Order",
    task:"You are the waiter. Take an order from TWO other players at the same time, then repeat both orders back correctly from memory.",
    focus:"Listening · Reported speech",
    lang:["So that's one… and one…","Anything to drink?","Let me repeat that."] },

  { t:"RESTAURANT", mode:"speak", sec:60, pts:10,
    title:"Much or Many?",
    task:"Explain the difference between “much / many” and “a few / a little”. Give one correct example sentence for each of the four.",
    focus:"Quantifiers",
    lang:["How many people…?","How much money…?","a few friends / a little time"] },

  /* ---------------- HOTEL (7) — booking, present perfect, complaints ---- */
  { t:"HOTEL", mode:"speak", sec:90, pts:10,
    title:"Room for Three Nights",
    task:"Book a room by phone: 3 nights, 2 people, breakfast included. The player on your RIGHT is the receptionist and must ask you at least 2 questions.",
    focus:"Booking dialogue · Numbers and dates",
    lang:["I'd like to book a double room.","From the 4th to the 7th.","Does that include breakfast?"] },

  { t:"HOTEL", mode:"speak", sec:60, pts:10,
    title:"Too Noisy",
    task:"Your room is next to a nightclub. Ask to change rooms. You must use “I've been…” and “since / for” correctly.",
    focus:"Present perfect continuous",
    lang:["I've been awake since 2 a.m.","I've been waiting for an hour.","Could you move me?"] },

  { t:"HOTEL", mode:"speak", sec:60, pts:10,
    title:"Travel Diary",
    task:"Say 3 things you HAVE already done on this trip and 2 things you HAVEN'T done yet. Present perfect with already / yet.",
    focus:"Present perfect · already, yet, never",
    lang:["I've already visited…","I haven't tried… yet.","I've never seen…"] },

  { t:"HOTEL", mode:"speak", sec:60, pts:10,
    title:"My Perfect Room",
    task:"Describe your ideal hotel room in 5 sentences. Use at least 4 prepositions of place.",
    focus:"Prepositions of place · There is / There are",
    lang:["There's a balcony next to…","opposite the bed","in the corner","above the desk"] },

  { t:"HOTEL", mode:"speak", sec:60, pts:10,
    title:"Double Charge",
    task:"The hotel charged your card twice. Explain the problem clearly and ask for a refund. Stay calm and polite.",
    focus:"Explaining a problem · Passive voice",
    lang:["I was charged twice.","There seems to be a mistake.","I'd like a refund, please."] },

  { t:"HOTEL", mode:"speak", sec:60, pts:10,
    title:"Five Good Questions",
    task:"Ask 5 yes/no questions to find out whether a hotel is good. All 5 must be grammatically correct or you score nothing.",
    focus:"Yes/no question formation",
    lang:["Is there air conditioning?","Do you have Wi-Fi?","Can I check in early?"] },

  { t:"HOTEL", mode:"speak", sec:60, pts:10,
    title:"Lost Key Card",
    task:"You are checking out but you lost the key card and broke a lamp. Apologise, explain, and offer a solution.",
    focus:"Apologising · Offers with 'I'll'",
    lang:["I'm really sorry, I…","It was an accident.","I'll pay for it, of course."] },

  /* ---------------- POSTCARD (8) — WRITING ------------------------------ */
  { t:"POSTCARD", mode:"write", min:30, pts:10,
    title:"Wish You Were Here",
    task:"Write a postcard of at least 30 words about the city you are in. Use the PAST SIMPLE three times.",
    focus:"Writing · Past simple",
    lang:["Yesterday I visited…","We ate…","It was amazing."] },

  { t:"POSTCARD", mode:"write", min:25, pts:10,
    title:"Bigger, Better, Busier",
    task:"Write at least 25 words comparing this city with your hometown. Use two comparatives and one superlative.",
    focus:"Writing · Comparatives & superlatives",
    lang:["bigger than","more expensive than","the friendliest city"] },

  { t:"POSTCARD", mode:"write", min:25, pts:10,
    title:"Travel Review",
    task:"Write a 25-word review of a place you have visited. Include three different adjectives and a star rating out of 5.",
    focus:"Writing · Opinion adjectives",
    lang:["crowded","breathtaking","overrated"] },

  { t:"POSTCARD", mode:"write", min:25, pts:10,
    title:"Tomorrow's Plan",
    task:"Write at least 3 sentences about what you are going to do tomorrow. Use “going to” in every sentence.",
    focus:"Writing · Future with 'going to'",
    lang:["I'm going to visit…","We're going to try…"] },

  { t:"POSTCARD", mode:"write", min:30, pts:10,
    title:"Come With Me",
    task:"Write a 30-word message inviting a friend to join your trip. It must contain two questions.",
    focus:"Writing · Invitations & question marks",
    lang:["Why don't you come?","Are you free in July?","How about joining me?"] },

  { t:"POSTCARD", mode:"write", min:25, pts:10,
    title:"When I Was a Kid",
    task:"Write at least 2 sentences about how you used to travel as a child. Use “used to” correctly.",
    focus:"Writing · used to",
    lang:["We used to drive…","I didn't use to like…"] },

  { t:"POSTCARD", mode:"write", min:25, pts:10,
    title:"Weather Report",
    task:"Write a 25-word weather report for this city. Use at least 4 weather words.",
    focus:"Writing · Weather vocabulary",
    lang:["humid","showers","freezing","breeze"] },

  { t:"POSTCARD", mode:"write", min:30, pts:10,
    title:"Linking Words",
    task:"Write 3 sentences about your trip. One must use ALTHOUGH, one BECAUSE and one SO.",
    focus:"Writing · Linking words",
    lang:["Although it rained,…","…because it was cheap.","It was late, so we…"] },

  /* ---------------- TROUBLE (7) — problem-solving & narrative ----------- */
  { t:"TROUBLE", mode:"speak", sec:60, pts:10,
    title:"Missed the Train",
    task:"You missed the last train. Say what you WOULD do — use the second conditional three times.",
    focus:"Second conditional",
    lang:["If I had more money, I would…","If I were you, I'd…"] },

  { t:"TROUBLE", mode:"speak", sec:75, pts:10,
    title:"Stolen Wallet",
    task:"Report a theft to the police. Say what you WERE DOING, where and when. Use the past continuous at least three times.",
    focus:"Past continuous vs past simple",
    lang:["I was walking when…","While I was paying,…","Someone was standing behind me."] },

  { t:"TROUBLE", mode:"speak", sec:45, pts:10,
    title:"Completely Lost",
    task:"You are lost, your phone is dead and you don't speak the language. Explain how you would solve it. 45 seconds, no long pauses.",
    focus:"Fluency · Problem-solving language",
    lang:["The first thing I'd do is…","I could always…","As a last resort…"] },

  { t:"TROUBLE", mode:"speak", sec:60, pts:10,
    title:"At the Pharmacy",
    task:"You feel terrible. Describe 3 symptoms and ask the pharmacist for help.",
    focus:"Health vocabulary · Asking for advice",
    lang:["I've got a sore throat.","My stomach hurts.","What do you recommend?"] },

  { t:"TROUBLE", mode:"speak", sec:60, pts:10,
    title:"The Worst Trip Ever",
    task:"Improvise the story of the worst trip you never had. 60 seconds of continuous speech — no pause longer than 3 seconds.",
    focus:"Fluency · Storytelling",
    lang:["It all started when…","To make matters worse,…","In the end,…"] },

  { t:"TROUBLE", mode:"speak", sec:60, pts:10,
    title:"Taxi, Bus or Walk?",
    task:"Convince the whole group that your transport choice is the best. Give 3 reasons. The group votes — you only score if you win the vote.",
    focus:"Debating · Giving reasons",
    lang:["Firstly,…","The main advantage is…","On the other hand,…"] },

  { t:"TROUBLE", mode:"sprint", sec:30, pts:10,
    title:"Tongue Twister",
    task:"Say this THREE times, fast and clearly: “The tired tourist took a taxi to the tall tower on Tuesday.”",
    focus:"Pronunciation · /t/ and word stress",
    lang:["Watch the /t/ sounds","Keep the rhythm steady"] },

  /* ---------------- SPRINT / LUCKY BREAK (5) ---------------------------- */
  { t:"BONUS", mode:"sprint", sec:30, pts:10,
    title:"Souvenir Sprint",
    task:"Name 10 things you can pack in a suitcase. 30 seconds. No repeats.",
    focus:"Vocabulary: objects",
    lang:["charger","sunscreen","passport"] },

  { t:"BONUS", mode:"sprint", sec:30, pts:10,
    title:"A to E",
    task:"Name one country beginning with A, B, C, D and E — and one thing it is famous for. 30 seconds.",
    focus:"Countries & nationalities",
    lang:["Argentina is famous for…"] },

  { t:"BONUS", mode:"sprint", sec:30, pts:10,
    title:"Irregular Fire",
    task:"Give the past simple AND past participle of: go, take, fly, eat, buy, leave. 30 seconds.",
    focus:"Irregular verbs",
    lang:["go – went – gone"] },

  { t:"BONUS", mode:"sprint", sec:40, pts:10,
    title:"Silent Letters",
    task:"Pronounce these correctly: island, receipt, foreign, comfortable, Wednesday, luggage. One mistake allowed.",
    focus:"Pronunciation · Silent letters",
    lang:["/ˈaɪlənd/","/rɪˈsiːt/","/ˈwenzdeɪ/"] },

  { t:"BONUS", mode:"sprint", sec:40, pts:10,
    title:"Six Word Story",
    task:"Tell the story of a whole holiday in exactly six words. Say it out loud. The group decides if it works.",
    focus:"Creativity · Word economy",
    lang:["“Booked flight. Wrong airport. Great story.”"] }
];

/* ---------------- CITY CHALLENGES (5) — one per stamp ------------------ */
const CITY_CARDS = {
  "Tokyo": { t:"CITY", mode:"speak", sec:90, pts:25,
    title:"Tokyo — The Interview",
    task:"A Japanese TV reporter stops you in Shibuya. Answer these three questions with a full, developed answer (at least 3 sentences each): What surprised you most about Tokyo? What would you change about your own country? What advice would you give a first-time visitor?",
    focus:"Fluency · Opinion & advice · Extended answers",
    lang:["What surprised me most was…","If I could change one thing…","My advice would be to…"] },

  "Cairo": { t:"CITY", mode:"speak", sec:90, pts:25,
    title:"Cairo — The Tour Guide",
    task:"You are a guide at the Pyramids. Give a 90-second tour: describe what visitors can see, tell one historical fact in the past simple, and warn them about two things using 'must' or 'mustn't'.",
    focus:"Describing places · Past simple · Obligation modals",
    lang:["On your left you can see…","It was built around…","You mustn't touch the stones."] },

  "Paris": { t:"CITY", mode:"speak", sec:90, pts:25,
    title:"Paris — The Debate",
    task:"Take a side and defend it for 90 seconds against another player: “Travelling alone is better than travelling with friends.” Give at least three arguments and respond to one counter-argument.",
    focus:"Debate · Agreeing & disagreeing · Linking words",
    lang:["I strongly believe that…","That's a fair point, however…","To sum up,…"] },

  "Lima": { t:"CITY", mode:"speak", sec:90, pts:25,
    title:"Lima — The Story Chain",
    task:"Continue this story for 90 seconds without stopping: “I arrived in Lima at midnight. The taxi driver looked at my address, laughed, and said…” Use at least four past tenses.",
    focus:"Creative storytelling · Narrative tenses",
    lang:["Suddenly…","I had never seen…","While we were driving,…"] },

  "New York": { t:"CITY", mode:"speak", sec:90, pts:25,
    title:"New York — The Pitch",
    task:"You have 90 seconds to pitch a brand-new tourist attraction for New York to a group of investors. Say what it is, who it is for, why it will succeed, and how much a ticket costs.",
    focus:"Persuasive speaking · Future forms · Numbers",
    lang:["Imagine a place where…","It's designed for…","We expect it to attract…"] }
};

/* ---------------- BOARD LAYOUT (30 tiles) ----------------------------- */
const BOARD = [
  { type:"START" },
  { type:"AIRPORT" }, { type:"POSTCARD" }, { type:"RESTAURANT" },
  { type:"TROUBLE" }, { type:"HOTEL" },
  { type:"CITY", city:"Tokyo" },
  { type:"POSTCARD" }, { type:"AIRPORT" }, { type:"BONUS" },
  { type:"RESTAURANT" }, { type:"TROUBLE" },
  { type:"CITY", city:"Cairo" },
  { type:"HOTEL" }, { type:"POSTCARD" }, { type:"AIRPORT" },
  { type:"RESTAURANT" }, { type:"BONUS" },
  { type:"CITY", city:"Paris" },
  { type:"TROUBLE" }, { type:"POSTCARD" }, { type:"HOTEL" },
  { type:"AIRPORT" },
  { type:"CITY", city:"Lima" },
  { type:"RESTAURANT" }, { type:"POSTCARD" }, { type:"TROUBLE" },
  { type:"BONUS" },
  { type:"CITY", city:"New York" },
  { type:"HOTEL" }
];

const TYPE_INFO = {
  START:      { icon:"🏠", name:"Home Airport",  color:"#e8c07d" },
  AIRPORT:    { icon:"✈️", name:"Airport",       color:"#6cb2eb" },
  RESTAURANT: { icon:"🍽️", name:"Restaurant",    color:"#f3a683" },
  HOTEL:      { icon:"🏨", name:"Hotel",         color:"#a3d9a5" },
  POSTCARD:   { icon:"📸", name:"Postcard",      color:"#c8a2e8" },
  TROUBLE:    { icon:"⚠️", name:"Trouble",       color:"#ef8a8a" },
  BONUS:      { icon:"🎒", name:"Lucky Break",   color:"#ffe08a" },
  CITY:       { icon:"🛂", name:"City Challenge",color:"#ffd166" }
};
