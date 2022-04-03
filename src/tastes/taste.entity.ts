import { Post } from "src/posts/post.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum TasteType {
    'lol' = 'lol',
    'love' = 'love',
    'angry' = 'angry',
    'sad' = 'sad',
    'dizzy' = 'dizzy',
    'surprised' = 'surprised',
}

@Entity()
export class Taste {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    taste: TasteType;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;

    @Column()
    user: string;

    @ManyToOne(type => Post, post => post.tastes)
    post: Post;
}