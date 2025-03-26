import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength, isString } from "class-validator";
import { EmailUnico, EmailUnicoValidator } from "../validacao/email-unico.validator";

export  class criaUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "Não pode ser vazio" })
    @ApiPropertyOptional({
        example: 'Roberto silva',
        description:   'Esse campo é para conter o nome completo'
    })
    nome: string;

    @IsInt()
    @ApiProperty({
        example: '15',
        description: 'esse campo deve conter apenas números que representam a idade'
    })
    idade: number;

    @IsString()
    @ApiProperty({
        example: 'São Paulo',
        description: 'esse campo deve conter uma cidade'
    })
    cidade: string;

    @IsEmail(undefined, {message: "Email inválido"})
    @EmailUnico ({message: "Email já cadastrado"})
    @ApiProperty({
        example:'exemplo@exemplo@gmail.com',
        description: 'esse campo deve conter um e-mail válido'
    })
    email: string;

    @IsString()
    @ApiProperty({
        example: '(99)99999999',
        description: 'esse campo deve conter um numero de telefone válido'
    })
    telefone: string;

    @MinLength(6, {message: "Senha deve ter no mínimo 6 caracteres"})
    @ApiProperty({
        example:'Narutoooooooo',
        description: 'a senha deve conter no minimo 6 caracteres'
    })
    senha: string;
}

    
