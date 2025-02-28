import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength, isString } from "class-validator";

export  class criaUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "Não pode ser vazio" })
    nome: string;

    @IsInt()
    idade: number;

    @IsString()
    cidade: string;

    @IsEmail(undefined, {message: "Email inválido"})
    @EmailUnico ({message: "Email já cadastrado"})
    email: string;

    @IsString()
    telefone: string;

    @MinLength(6, {message: "Senha deve ter no mínimo 6 caracteres"})
    senha: string;
}

    
