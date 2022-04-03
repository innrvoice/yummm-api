import { Optional } from "@nestjs/common";
import { Taste } from "src/tastes/taste.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum PostType {
    'LINK' = 'LINK',
    'IMAGE' = 'IMAGE',
    'VIDEO' = 'VIDEO',
}

@Entity()
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    type: PostType;

    @Column()
    linkImageURL: string;

    @Column()
    linkURL: string;

    @Column({ type: 'json'})
    urls: Record<string, any>[];

    @Column({ type: 'timestamp with time zone'})
    dateAdded: Date;

    @Column()
    user: string;

    @JoinTable()
    @OneToMany(type => Taste, taste => taste.post)
    tastes: Taste[];
}