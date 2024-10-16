const express = require('express');
const router = express.Router();
const problemController = require('../controllers/problemController');

router.get('/', problemController.getAllProblems);
router.get('/:id', problemController.getProblem);

module.exports = router;

