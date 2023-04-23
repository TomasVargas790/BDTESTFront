import { Candidato } from '../model/candidato.model';
import { CreateCandidato, updateCandidato, deleteCandidato } from '../dto/candidato.dto'
import express from 'express';
import { nanoid } from 'nanoid';
import { CandidatosArray } from '../example';
import { handleCandidatoGet, handleCandidatoInsert, handleCandidatoDelete } from '../controller/candidato.controller';


let CandidatoRouter = express.Router();

CandidatoRouter.get('/get/:id', handleCandidatoGet);

CandidatoRouter.post('/register', handleCandidatoInsert);

CandidatoRouter.delete('/delete/:id', handleCandidatoDelete);

CandidatoRouter.post('/login', (req, res) => {

});



CandidatoRouter.put('/update/:id', (req, res) => {

});


*/
export default CandidatoRouter
