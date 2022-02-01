const dbService = require('../../services/db.service');
const logger = require('../../services/logger.service');
const ObjectId = require('mongodb').ObjectId;

async function query(userId = '') {
  console.log('query -> userId', userId)
  try {
    // const criteria = _buildCriteria(filterBy);
    const collection = await dbService.getCollection('recipe');
    const recipes = await collection.find({ userId: ObjectId(userId) }).toArray();
    return recipes;
  } catch (err) {
    logger.error('Can not find recipes', err);
    throw err;
  }
}

async function getById(recipeId) {
  try {
    const collection = await dbService.getCollection('recipe');
    const recipe = await collection.findOne({ _id: ObjectId(recipeId) });
    return recipe;
  } catch (err) {
    logger.error(`Can not find recipe ${recipeId}`, err);
    throw err;
  }
}

async function remove(recipeId) {
  try {
    const collection = await dbService.getCollection('recipe');
    await collection.deleteOne({ _id: ObjectId(recipeId) });
    return recipeId;
  } catch (err) {
    logger.error(`Can not remove recipe ${recipeId}`, err);
    throw err;
  }
}

async function add(recipe) {
  try {
    recipe.createdAt = Date.now();
    recipe.userId = ObjectId(recipe.userId)
    // recipe
    const collection = await dbService.getCollection('recipe');
    await collection.insertOne(recipe);
    return recipe;
  } catch (err) {
    logger.error('Can not add recipe', err);
    throw err;
  }
}

async function update(recipe) {
  try {
    const newRecipe = {
      ...recipe,
      _id: ObjectId(recipe._id),
      userId: ObjectId(recipe.userId)
    }
    const collection = await dbService.getCollection('recipe');
    await collection.updateOne({ _id: newRecipe._id }, { $set: newRecipe });
    return recipe;
  } catch (err) {
    logger.error(`Can not update recipe ${recipe._id}`, err);
    throw err;
  }
}

async function updateRecipe(recipeId, field, value) {
  try {
  
    const collection = await dbService.getCollection('recipe');
    await collection.updateOne({ _id: ObjectId(recipeId) }, { $set: { [field]: value } });
    // return recipe;
  } catch (err) {
    logger.error(`Can not update recipe ${recipe._id}`, err);
    throw err;
  }
}

async function updateIng(recipeId, field, value, ingId) {
  try {
    const collection = await dbService.getCollection('recipe');
    const recipe = await collection.updateOne({ _id: ObjectId(recipeId), "ingredients.id": ingId }, { $set: { [`ingredients.$.${field}`]: value } });
    console.log('updateIng -> recipe', recipe)
    return recipe;
  } catch (err) {
    logger.error(`Can not update recipe ${recipe._id}`, err);
    throw err;
  }
}

module.exports = {
  remove,
  query,
  getById,
  add,
  update,
  updateRecipe,
  updateIng,
};



function _buildCriteria(filterBy) {
  const criteria = {};
  const { word, labels } = filterBy;

  if (word) {
    const txtCriteria = { $regex: word, $options: 'i' };
    criteria.name = txtCriteria;
  }
  if (labels) {
    criteria.labels = { $all: labels };
  }
  if (filterBy.type) {
    criteria.inStock = { $eq: filterBy.type === 'instock' };
  }
  return criteria;
}
