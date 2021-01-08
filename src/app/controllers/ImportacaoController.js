const fs = require('fs');
const Excel = require('exceljs');

const Models = require('../models/index');

module.exports = {
    async importarMarca(req,res){
        const workbook = new Excel.Workbook();
        const worksheet = await workbook.csv.readFile('./src/app/controllers/csv/marcas-carros.csv');
        worksheet.eachRow({ includeEmpty: false }, async function(row) {
            let linha = (row.getCell(1).value).split(';');
            if(!isNaN(parseInt(linha[0]))){
                try {
                    if(await Models.Marca.findOne({where: {id:parseInt(linha[0])}}) === null)
                        await Models.Marca.create({id: parseInt(linha[0]), nome: linha[1] });
                    else
                        throw "(!) Id existente: "+linha[0]+" / Descrição: "+linha[1];
    
                } catch (error) {
                    console.error(error)
                }
            }
    
            });            
        res.status(200).json({message: "Importação das Marcas (Teste)"});
    }
}