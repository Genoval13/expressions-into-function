// Clean up the code below with a single function called `personalIntroduction`
// The new code should have the exact same functionality and output.

let people = [
    {
    name : "Bob",
    height : "72",
    favoriteColor : "red"
    },
    {
    name : "Samantha",
    height : "65",
    favoriteColor : "orange",
    },
    {
    name : "Christopher",
    height : "69",
    favoriteColor : "green",
    },
    {
    name : "Tamera",
    height : "63",
    favoriteColor : "blue",
    }
];

function personalIntroduction (name, height, favoriteColor) {
    for (i = 0; i < people.length; i++) {
        console.log("My name is " + name + ", and my height is " + height + ", and my favorite color is " + favoriteColor);
    }
}