const Player = require("../database/models/Player");

const addPlayer = async (req, res, next) => {
  try {
    const player = await Player.create({ ...req.body });
    res.status(201).json(player);
  } catch (e) {
    next(e);
  }
};

const getPlayer = async (req, res, next) => {
  try {
    const playerId = req.params.id;
    const player = await Player.findByPk(playerId);
    if (!player) {
      const error = new Error("Player not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json(player);
  } catch (e) {
    next(e);
  }
};

const getAllPlayers = async (req, res, next) => {
  try {
    const players = await Player.findAll();
    res.status(200).json(players);
  } catch (error) {
    next(error);
  }
};

const updatePlayer = async (req, res, next) => {
  try {
    const playerId = req.params.id;
    const [updated] = await Player.update(req.body, {
      where: { id: playerId },
    });
    if (updated === 0) {
      const error = new Error("Player not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ message: "Player updated successfully" });
  } catch (e) {
    next(e);
  }
};

const deletePlayer = async (req, res, next) => {
  try {
    const playerId = req.params.id;
    const deletedCount = await Player.destroy({ where: { id: playerId } });
    if (deletedCount === 0) {
      const error = new Error("Player not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ message: "Player deleted successfully" });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  addPlayer,
  getPlayer,
  updatePlayer,
  deletePlayer,
  getAllPlayers,
};
