import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuariosArmazenados } from "../usuarios-armazenados.service";


import { Injectable } from "@nestjs/common";
@Injectable()
@ValidatorConstraint({async: true})

export class EmailUnicoValidator implements ValidatorConstraintInterface{

    constructor (private cIUsuariosArmazenados: UsuariosArmazenados){}

    async validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
       
        const validarEmail = await this.cIUsuariosArmazenados.validarEmail(value);
        return !validarEmail;
    }
    export const EmailUnico = (opcaoValidacao: ValidationOptions) =>(
        return (object: Object, propriedade: string) => {
            registerDecorator({
                target: object.constructor,
                propertyName: propriedade,
                options: opcaoValidacao,
                constraints: [],
                validator: EmailUnicoValidator,
            });
        }
    )
    }
   
}