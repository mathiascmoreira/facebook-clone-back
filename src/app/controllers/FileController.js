import File from '../models/File';
 
class FileController {
   async store(req, res) {
// dentro da requisição, variável req, terá varias informações
// sobre o arquivo que são inseridas pelo middleware upload.single('file')
// Iremos utilizar apenas duas: originalname e filename que iremos armazenar
// no banco de dados nas colunas name e path.
       const { originalname: name, filename: path } = req.file;
       const file = await File.create({
           name,
           path,
       });
       return res.json(file);
   }
}
 
export default new FileController();