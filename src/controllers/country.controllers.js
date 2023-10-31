const catchError = require('../utils/catchError');
const Country = require('../models/Country');

const getAll = catchError(async(req, res) => {
    const countries = await Country.findAll();
    return res.json(countries);
});

const create = catchError(async(req, res) => {
    const country = await Country.create(
        req.body
    );
    return res.status(201).json(country);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const country = await Country.findByPk(id);
    if (!country) return res.status(404).json({ message: "Country not found" })
    return res.json(country);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Country.destroy({ where: { id } });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const country = await Country.update(
        req.body,
        { where: { id }, returning: true }
    )
    if (country[0] === 0) return res.status(404).json({ message: "Country not found" })
    return res.json(country[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
}
