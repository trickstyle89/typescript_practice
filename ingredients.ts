const chooseRecipe = function(bakeryA: string[], bakeryB: string[], recipes: { name: string, ingredients: string[] }[]) {
    let chosenRecipe: string | undefined;
    recipes.forEach(function(recipe) {
        let allIngredientsPresent = true;
        recipe.ingredients.forEach(function(ingredient) {
            if (!bakeryA.includes(ingredient) && !bakeryB.includes(ingredient)) {
                allIngredientsPresent = false;
            }
        });
        if (allIngredientsPresent) {
            chosenRecipe = recipe.name;
        }
    });
    return chosenRecipe;
}

let bakeryA: string[] = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB: string[] = ['milk', 'butter', 'cream cheese'];
let recipes: { name: string, ingredients: string[] }[] = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
