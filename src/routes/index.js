const express = require('express');
const countryRouter = require('./country.router');
const userRouter = require('./user.router');
const cityRouter = require('./city.router');
const continentRouter = require('./continent.router');
const studentRouter = require('./student.router');
const courseRouter = require('./course.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/countries', countryRouter);
router.use('/users', userRouter);
router.use('/cities', cityRouter);
router.use('/continents', continentRouter);
router.use('/students', studentRouter);
router.use('/courses', courseRouter);

module.exports = router;