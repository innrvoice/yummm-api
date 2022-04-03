import { TasteType } from "../taste.entity";
import { IsEnum } from 'class-validator';

export class CreateTasteDto {
    @IsEnum(TasteType)
    tasteType: TasteType;
    post: string;
}