import { Module } from '@nestjs/common';
import { UsuarioModule } from './Usuario/usuario.module';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
