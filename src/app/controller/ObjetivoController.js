const Objetivo =  require("../model/Objetivo");
class ObjetivoController{
    async store(req, res){
        const data = await Objetivo.create(req.body);
        return res.json(data);
    }
    async list(req, res){
        const data = await Objetivo.find({});
        return res.json(data);
    }
    async delete(req, res){
            const {id} = req.body;
            const end = await Objetivo.findOne({where: {"id": id}})
            console.log(end)
            if(end){
                await Objetivo.remove(end);
                console.log(204)
                return res.send("Objetivo deletado com sucesso!!!")
            }else{
                console.log(404)
            }
    }
    async update(req, res){
        await Objetivo.findOneAndUpdate(req.body);
        console.log(204)
        return res.send("Update realizado com sucesso!!!");
    }
    
}
module.exports = new ObjetivoController();