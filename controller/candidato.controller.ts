import { Request, Response } from 'express';
import { CandidatosArray } from '../example';
import { CreateCandidato } from '../dto/candidato.dto'
import { Candidato } from '../model/candidato.model';
import { nanoid } from 'nanoid'

export const handleCandidatoGet = (req: Request, res: Response) => {

    let candidatoId: string | number = req.params.id;

    CandidatosArray.find(Candidato => {
        if (Candidato.id == candidatoId) return res.send(Candidato)
        else return res.status(400).send('ono');
    });

}
export const handleCandidatoInsert = (req: Request, res: Response) => {

    try {

        const { nombre, apellido, documento, correo, telefono, curriculum }: CreateCandidato = req.body;
        const newCandidato: Candidato = {
            nombre, apellido, documento, correo, telefono, curriculum,
            id: nanoid(),
            createdAt: new Date(),
            updatedAt: new Date()
        }
        CandidatosArray.push(newCandidato);
        res.send(CandidatosArray)

    } catch (error) {
        res.status(500).send(error);
    }
}

export const handleCandidatoDelete = (req: Request, res: Response) => {

    const candidatoId: string | number = req.params.id;
    const index: string | number = CandidatosArray.findIndex((currentCandidato) => { currentCandidato.id != candidatoId });
    CandidatosArray.splice(index, 1);
    res.send(CandidatosArray);
}

export const handleCandidatoLogin = (req: Request, res: Response) => {

    const { nick, hash }: { nick: string, hash: string } = req.body;
    const index: string | number = CandidatosArray.findIndex(() => { });
}