const fs = require('fs');
const Excel = require('exceljs');

const Models = require('../models/index');

module.exports = {
    async importarMarca(req,res){
        const files = fs.readdirSync('./src/app/controllers/csv/marcas/');
        let status = true;
        for(const file of files){
            const workbook = new Excel.Workbook();
            const worksheet = await (await workbook.csv.readFile('./src/app/controllers/csv/marcas/'+file)).getSheetValues()

            for(const row of worksheet){
                if(typeof(row) !== 'undefined'){
                    let linha = (row[1]).split(';');
                    if(!isNaN(parseInt(linha[0]))){
                        try {
                            if(await Models.Marca.findOne({where: {id:parseInt(linha[0])}}) === null)
                                await Models.Marca.create({id: parseInt(linha[0]), nome: linha[1] });
                            else
                                throw "(!) Id existente: "+linha[0]+" / Descrição: "+linha[1];
            
                        } catch (error) {
                            status = false;
                            console.error(error)
                        }
                    }
                }
            }
        }
        if(status == true)
            res.status(200).json({message: "Importação das Marcas (Teste)"});
        else
            res.status(400).json({message: "ERRO: Importação das Marcas (Teste)"});
    },
    async importarModelo(req,res){
        const files = fs.readdirSync('./src/app/controllers/csv/modelos/');
        let status = true;
        for(const file of files){
            const workbook = new Excel.Workbook();
            const worksheet = await (await workbook.csv.readFile('./src/app/controllers/csv/modelos/'+file)).getSheetValues()
             let tipo = 0;
            if(file.search('carro') != -1) {
                tipo = 1;
            } else if(file.search('moto') != -1){
                tipo = 2;
            } else if(file.search('caminhao') != -1){
                tipo = 3;
            } else if(file.search('nautica') != -1){
                tipo = 4;
            }

            for(const row of worksheet){
                if(typeof(row) !== 'undefined'){
                    let linha = (row[1]).split(';');
                    if(!isNaN(parseInt(linha[1]))){
                        try {
                            if(await Models.Modelo.findOne({where: {nome:linha[2]}}) === null && await Models.Marca.findOne({where: {id:parseInt(linha[0])}}) === null)
                                await Models.Modelo.create({nome: linha[2], tipo, marca_id: linha[1]});
                            else if(await Models.Marca.findOne({where: {id:parseInt(linha[1])}}) === null)
                                throw "(!) Marca Id inexistente: "+linha[0];
                            else
                                throw "(!) Nome de Modelo existente: "+linha[0]+" / Descrição: "+linha[2];
            
                        } catch (error) {
                            status = false;
                            console.error(error)
                        }
                    }
                }
            }
        }
        if(status == true)
            res.status(200).json({message: "Importação das Modelos (Teste)"});
        else
            res.status(400).json({message: "ERRO: Importação das Modelos (Teste)"});
    }    
}