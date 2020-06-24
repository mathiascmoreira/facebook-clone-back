import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';
 
export default async (req, res, next) => {
   const authHeader = req.headers.authorization;
   
   if (!authHeader) {
       return res.status(401).json({ error: 'Token not provided' });
   }
   // O campo authorization possui o formato 'Bearer token', mas precisamos apenas
   // do token, então usamos o método split para pegar apenas a parte do token
   const [, token] = authHeader.split(' ');
 
   try {
       // Uma vez que pegamos o token, usamos o método verify do jsonwebtoken
       // para descriptografa-lo e verificar sua validade. Porém o método verify
       // é um método assíncrono (também possui uma versão síncrona) que usa uma
       // abordagem mais antiga que é a do método de callback. Para utilizarmos
       // a abordagem de promises e podermos utilizar o await, usamos o método
       // promisify de dentro do pacote util (padrão do node). Este método converte
       // um método assíncrono do tipo callback em um to tipo promise.      

       const decoded = await promisify(jwt.verify)(token, authConfig.secret);
 
       // Caso o token seja válido, podemos armazenar a informação de id contida nele
       // dentro do request. Desta forma podemos utilizar esta informação nos rotas
       // Por exemplo, se for requisitado atualizar os dados de um usuário, não será
       // nessário passar o id do usuário na requisição, pois o id já estará informado
       // no token
       req.userId = decoded.id;
 
       return next();
   } catch (err) {
       // Caso o token não seja válido, o método verify irá lançar uma exceção

       return res.status(401).json({ error: 'Token invalid' });
   }
};
