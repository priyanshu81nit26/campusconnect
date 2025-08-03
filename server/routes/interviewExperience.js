const express = require('express');
const router = express.Router();
const controller = require('../controllers/interviewExperience');
// const auth = require('../middlewares/auth'); // Uncomment if using auth

router.get('/', controller.getAllExperiences);
router.post('/', /*auth,*/ controller.createExperience);
router.get('/:id', controller.getExperienceById);
router.put('/:id', /*auth,*/ controller.updateExperience);
router.delete('/:id', /*auth,*/ controller.deleteExperience);

module.exports = router;
