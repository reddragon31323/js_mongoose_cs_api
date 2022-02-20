const Jogador =  require("../model/Jogador")
class JogadorController{
    async store(req, res){
        const data = await Jogador.create(req.body);
        return res.json(data);
    }
    async list(req, res){
        const data = await Jogador.find({});
        return res.json(data);
    }
    async delete(req, res){
            const {id} = req.body;
            const end = await Jogador.findOne({where: {"id": id}})
            console.log(end)
            if(end){
                await Jogador.remove(end);
                return console.log(204)
            }else{
                console.log(404)
            }
    }
    async update(req, res){
        await Jogador.findOneAndUpdate(req.body);
    }
}
module.exports = new JogadorController();