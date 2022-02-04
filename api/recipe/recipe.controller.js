const recipeService = require('./recipe.service.js');
const logger = require('../../services/logger.service');

// List

async function getRecipes(req, res) {
    try {
        const { userId, filterBy: _filterBy } = req.query;
        const filterBy = JSON.parse(_filterBy)
        // console.log('getRecipes -> filterBy', filterBy)
        // console.log('querying');
        const recipes = await recipeService.query(userId, filterBy);
        res.json(recipes);
    } catch (err) {
        logger.error('Failed to get recipes', err);
        res.status(500).send({ err: 'Failer ti get recipes' });
    }
}

// Read

async function getRecipeById(req, res) {
    try {
        const recipeId = req.params.id;
        const recipe = await recipeService.getById(recipeId);
        res.json(recipe);
    } catch (err) {
        logger.error('Failer to get recipe', err);
        res.status(500).send({ err: 'Failed to get recipe' });
    }
}

// Create

async function addRecipe(req, res) {
    try {
        const recipe = req.body;
        const addedRecipe = await recipeService.add(recipe);
        res.json(addedRecipe);
    } catch (err) {
        logger.error('Failed to add recipe', err);
        res.status(500).send({ err: 'Failed to add recipe' });
    }
}

// Update


/*TEST START*/
async function updateRecipe(req, res) {
    try {
        const { data, type } = req.body;

        const { recipe, field, value, ingId } = data

        let savedRecipe
        if (type === 'updateIng') {
            savedRecipe = await recipeService.updateIng(recipe._id, field, value, ingId);
        } else if (type === 'updateRecipe') {
            savedRecipe = await recipeService.updateRecipe(recipe._id, field, value);
        } else {
            savedRecipe = await recipeService.update(recipe);

        }
        res.json(savedRecipe);
    } catch (err) {
        logger.error('Failed to update recipe', err);
        res.status(500).send({ err: 'Failed to update recipe' });
    }
}
/*TEST END*/



/*ORIGINAL START*/
// async function updateRecipe(req, res) {
//     try {
//         const { recipe, field, value, ingId } = req.body;
//         let savedRecipe
//         if (ingId && field !== null && value !== null) {
//             savedRecipe = await recipeService.updateIng(recipe._id, field, value, ingId);
//         } else if (field && value) {
//             savedRecipe = await recipeService.updateRecipe(recipe._id, field, value);
//         } else {
//             savedRecipe = await recipeService.update(recipe);

//         }
//         res.json(savedRecipe);
//     } catch (err) {
//         logger.error('Failed to update recipe', err);
//         res.status(500).send({ err: 'Failed to update recipe' });
//     }
// }
/*ORIGINAL END*/


async function updateIngredient(req, res) {
    try {
        const recipe = req.body;
        // const { user } = req.session.user;
        const savedRecipe = await recipeService.update(recipe);
        res.json(savedRecipe);
    } catch (err) {
        logger.error('Failed to update recipe', err);
        res.status(500).send({ err: 'Failed to update recipe' });
    }
}


// Delete

async function removeRecipe(req, res) {
    try {
        const recipeId = req.params.id;
        const removedId = recipeService.remove(recipeId);
        res.send(removedId);
    } catch (err) {
        logger.error('Failed to delete recipe', err);
        res.status(500).send({ err: 'Failed to delete recipe' });
    }
}
module.exports = {
    getRecipes,
    getRecipeById,
    addRecipe,
    updateRecipe,
    removeRecipe
};