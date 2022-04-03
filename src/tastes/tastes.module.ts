import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TastesController } from './tastes.controller';
import { TastesRepository } from './tastes.repository';
import { TastesService } from './tastes.service';

@Module({
    imports: [TypeOrmModule.forFeature([TastesRepository])],
    exports: [TastesModule],
    controllers: [TastesController],
    providers: [TastesService],
})
export class TastesModule {}
