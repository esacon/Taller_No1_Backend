const express = require('express');
const router = express.Router();

const CharacterStatsController = require('../controllers/controller.character_stats');

router.post('/', CharacterStatsController.create);
router.get('/', CharacterStatsController.getAll);
router.get('/:id', CharacterStatsController.getID);
router.put('/:id', CharacterStatsController.update);
router.delete('/:id', CharacterStatsController.remove);

module.exports = router;