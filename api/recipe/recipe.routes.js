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
router.delete('/:id', requireAuth, requireAdmin, removeRecipe);

module.exports = router;
