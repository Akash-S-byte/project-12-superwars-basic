const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = []
    // Create players using for loop
    // Type your code here
players.forEach((element,index) => {
   var  obj={name:`${element}`,strength:Math.floor(Math.random()*100), image:`images/super-${index+1}.png`,type:index%2?"hero":"villain"};
    return detailedPlayers.push(obj)    
});
    return detailedPlayers;
}
// const initPlayers = (players) => {
//     let detailedPlayers = [];
//     // Create players using for loop
//     // Type your code here
//     let flag = "Hero";
//     for (let i = 0; i < players.length; i++) {
//         var obj = { name: players[i], strength: getRandomStrength, image: "images/super-" + (i + 1) + ".png", type: flag };
//         if (flag == "Hero") {
//             flag = "Villain"
//         } else
//             flag = "Hero";
//         detailedPlayers.push(obj);
//     }

//     return detailedPlayers;
// }
// getting random strength
const getRandomStrength = () => {return Math.ceil(Math.random()*100)
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    
}

// const buildPlayers = (players, type) => {
//     let fragment = '';
//     for (let i = 0; i < players.length; i++) {
//                     play = `<div class="player">
//                     <img src="${players[i].image}" alt="">
//                     <div class="name">${players[i].name}</div>
//                     <div class="strength">${players[i].strength}</div>
//                     </div>`;
//                     if (type == players[i].type) {
//                         fragment += play;
//                     }
//                 }
//     // Loop through players and accumulate HTML template
//     // depending of type of player(hero|villain)
//     // Type your code here

//     return fragment;
// }
const buildPlayers = (players, type) => {
    let fragment = '';
    for (var i = 0; i < players.length; i++) {
        playerrr = `<div class="player">
              <img src="${players[i].image}" alt="">
              <div class="name">${players[i].name}</div>
              <div class="strength">${players[i].strength}</div>
              </div>`;
        if (players[i].type == type) {
            fragment += playerrr;
        }
    }

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
// const buildPlayers = (players, type) => {
//     let fragment = '';
//         let fragment = '';
//         for (let i = 0; i < players.length; i++) {
//             play = `<div class="player">
//             <img src="${players[i].image}" alt="">
//             <div class="name">${players[i].name}</div>
//             <div class="strength">${players[i].strength}</div>
//             </div>`;
//             if (type == players.type[i]) {
//                 fragment += play;
//             }

//     // Loop through players and accumulate HTML template
//     // depending of type of player(hero|villain)
//     // Type your code here
//         }

//     return fragment;
// }
// // Display players in HTML
//         // Loop through players and accumulate HTML template
//         // depending of type of player(hero|villain)
//         // Type your code here

//         return fragment;
//     }
//     // Display players in HTML
// const viewPlayers = (players) => {
//     document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero')