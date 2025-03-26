import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";
import { UsuariosArmazenados } from "./usuario.dm";
import { criaUsuarioDTO } from "./dto/usuario.dto";

import { v4 as uuid } from "uuid";
import { ListaUsuarioDTO } from "./dto/consulta.dto";
import { ApiBadRequestResponse, ApiResponse } from "@nestjs/swagger";
@Controller('/usuarios')
export class UsuarioController{
    constructor(private cIUsuariosArmazenados: UsuariosArmazenados){

    }
    
        
    @Post()
    @ApiResponse({status: 200, description: 'retorna sucesso'})   
    @ApiBadRequestResponse({description: 'retorno de erro'})
    async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO ){    
                                                                                                                                                                                                                                                                                        
        // var validacoes = this.cIUsuariosArmazenados.validarUsuario(dadosUsuario);

        // if(validacoes.length > 0){
        //     return {
        //         status: 'Erro',
        //         validacoes: validacoes
        //     }
        // }
        var novoUsuario = new UsuarioEntity(uuid(),dadosUsuario.nome, dadosUsuario.idade, 
                                            dadosUsuario.cidade, dadosUsuario.email, dadosUsuario.telefone, 
                                            dadosUsuario.senha);
        this.cIUsuariosArmazenados.AdicionarUsuario(novoUsuario);



        var usuario = {
            dadosUsuario : dadosUsuario,
            status: 'Usuario Criado'
        }
        return  usuario;

    }
    @Get()
    async listaUsuarios(){
        this.cIUsuariosArmazenados.Usuarios;

        const usuariosListados = this.cIUsuariosArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.cidade,
                usuario.email
            )
        );
        return listaRetorno;

    }
   
}
  
