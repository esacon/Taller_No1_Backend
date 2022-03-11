const express = require('express');
const router = express.Router();

const CharacterController = require('../controllers/controller.character_stats');

router.post('/', CharacterController.create);
router.get('/', CharacterController.getAll);
router.get('/:id', CharacterController.getID);
router.put('/:id', CharacterController.update);
router.delete('/:id', CharacterController.remove);

module.exports = router;