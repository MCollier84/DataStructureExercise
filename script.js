// 1a
const jedi = [];

// 1b
jedi[0] = "Luke";
console.log(jedi);

// 1c
jedi.push("Obi-Wan Kenobi");
console.log(jedi);

// 1d
jedi.unshift("Yoda");
console.log(jedi);

// 1e
console.log(jedi[1]);

// 1f
jedi.pop("Obi-Wan Kenobi");
console.log(jedi);

// 1g
jedi.shift("Obi-Wan Kenobi");
console.log(jedi);

// 2a
const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];
// console.log(sithLords);

// 2b
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];
// console.log(imperialOfficers);

// 2c
const starWarsVillains = sithLords.concat(imperialOfficers);
// console.log(starWarsVillains);

// 2d
console.log(starWarsVillains.slice(0, 2));

// 3a
const droids = {
    astromech: "R2D2",
    protocol: "C-3PO",
    assassin: "IG-88"
};

// 3b
console.log(droids["astromech"]);

// 3c
console.log(droids.protocol);

// 3d
droids.assassin = "IG-11";
console.log(droids.assassin);

// Bonus
// 4
console.log("Darth Vader"[6]);
// console.log(starWarsVillains[0][6]); First index select a specific item in the array and the second number is selecting the specific character in the string.

// 5
console.log(sithLords.slice(-2, -1));

// 6a
const starWarsMovies = [
    {episodeOne: "The Phantom Menace",
    episodeTwo: "Attack of the Clones",
    episodeThree: "Revenge of the Sith"
    },
    {episodeFour: "A New Hope",
    episodeFive: "The Empire Strikes Back",
    episodeSix: "Return of the Jedi"
    },
    {episodeSeven: "The Force Awakens",
    episodeEight: "The Last Jedi",
    episodeNine: "The Rise of Skywalker"
    }
];

//   6b
starWarsMovies.splice(1, 0, "Solo", "Rogue One");
console.log(starWarsMovies);