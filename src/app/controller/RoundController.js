const Round = require("../model/Round");

class RoundController {
    async store(req, res) {
        const data = await Round.create(req.body);
        return res.json(data);
    }
    async list(req, res) {
        const data = await Round.find({});
        return res.json(data);
    }
    async delete(req, res) {
        const { id } = req.body;
        const round = await Round.findOne({ where: { "id": id } })
        console.log(round)
        if (round) {
            await Round.remove(round);
            console.log(204);
            return res.send("Round deletado com sucesso!!!")
        } else {
            return console.log(404)
        }
    }
    async update(req, res) {       
        await Round.findOneAndUpdate(req.body);
        console.log(204);
        return res.send("Update realizado com sucesso!!!")
    }
}
module.exports = new RoundController();