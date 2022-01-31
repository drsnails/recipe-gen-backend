const {
  requireAuth,
  requireAdmin,
} = require('../../middlewares/requireAuth.middleware');
const express = require('express');
const { log } = require('../../middlewares/logger.middleware');
const {
  getRecipes,
  getRecipeById,
  addRecipe,
  updateRecipe,
  removeRecipe,
} = require('./recipe.controller');
const router = express.Router();

router.get('/', log, getRecipes);
router.get('/:id', getRecipeById);
router.put('/', updateRecipe);
router.post('/', addRecipe);
router.delete('/:id', requireAuth, removeRecipe);

module.exports = router;
