/*
    Author: Yel MAngok John <Yel-Mangok>
    Solution: Movie Watchlist Manager
*/

// Initial watchlist
let watchlist = ["Inception", "Interstellar", "The Matrix", "Gladiator"];

// 1. Print total number of movies
console.log("\n***********************************************");
console.log(`Total movies:, ${watchlist.length}`);
console.log("\n***********************************************");

// 2. Add two new products to the watchlist
watchlist.push("The Dark Knight");
watchlist.push("Avatar");

console.log("\n\n***********************************************");
console.log(`After adding new Watchlist: ${watchlist}`);
console.log("***********************************************");

// 3. Remove the last movie from the watchlist
let removedLastMovie = watchlist.pop();
console.log("\n***********************************************");
console.log(`Removed last product: ${removedLastMovie}`);
console.log("***********************************************");

// 4. Print the first movie
console.log("First movie:", watchlist[0]);

// 5. Print the last movie
console.log("Last movie:", watchlist[watchlist.length - 1]);

// 6. Check watchlist size
if (watchlist.length >= 4) {
    console.log("***********************************************");
    console.log("You have many movies to watch!");
    console.log("***********************************************");
} else {
    console.log("Your watchlist is small.");
}

// 7. Print all movies with position starting from 1
for (let i = 0; i < watchlist.length; i++) {

    console.log((i + 1) + " - " + watchlist[i]);
}