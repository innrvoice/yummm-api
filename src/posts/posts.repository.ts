import { EntityRepository, Repository } from 'typeorm';
import { Post as YummmPost } from './post.entity';
import { TastesRepository } from 'src/tastes/tastes.repository';
import { CreatePostDto } from './dto/create-post.dto';

@EntityRepository(YummmPost)
export class PostsRepository extends Repository<YummmPost> {
  async createPost(createPostDto: CreatePostDto): Promise<YummmPost> {
    const { title, description, type, linkURL, linkImageURL, tasteType } =
      createPostDto;
    // const { tasteType } = createTasteDto;

    const post = this.create({
      title,
      description,
      type,
      linkURL: 'asd',
      linkImageURL,
      dateAdded: new Date(),
      urls: [{ id: "1"}, {id: "2"}],
      user: 'testuser',
    });

    await this.save(post);

    return post;
  }

  async getPosts(): Promise<[YummmPost[], number]> {

    const posts = this.findAndCount();

    return posts;
  }
}
