import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';
 
export default {
   // armazenamento em disco
   storage: multer.diskStorage({
       // pasta do armazenamento
       destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
 
       // como será nomeado o arquivo
       filename: (req, file, cb) => {
           crypto.randomBytes(16, (err, res) => {
               if (err) return cb(err);
 
               return cb(
                   null,
                   res.toString('hex') + extname(file.originalname) // O nome do arquivo conterá um numero hexadecimal aleatório, seguido pela extensão do arquivo
               );
           });
       },
   }),
};
