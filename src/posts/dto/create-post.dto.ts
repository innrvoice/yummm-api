import { IsEnum } from "class-validator";
import { TasteType } from "src/tastes/taste.entity";
import { PostType } from "../post.entity";

export class CreatePostDto {
  title: string;
  description: string;
  type: PostType;
  linkURL?: string;
  linkImageURL?: string;
  @IsEnum(TasteType)
  tasteType: TasteType;
}