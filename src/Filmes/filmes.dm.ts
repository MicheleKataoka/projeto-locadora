import { Injectable } from "@nestjs/common";
import { FilmesEntity } from "./filmes.entity";
import { FilmesController } from "./filmes.controller";

@Injectable()
export class FilmesArmazenados{
    filmes: FilmesEntity[] = [];

    verFilme(filme: FilmesEntity){
        this.filmes.push(filme);
    }
    get Filmes(){
        return this.filmes;
    }
   
   
}