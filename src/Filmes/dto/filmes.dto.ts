import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, MinLength, isString } from "class-validator";

export  class verFilmesDTO{
    @IsString()
    id: string;

    @IsString()
    nome: string;

    @IsNumber()
    duracao: number;

    @IsString()
    sinopse: string;

    @IsString()
    ano: string;

    @IsString()
    genero: string;

    
}

    
