import { EntityRepository, Repository } from 'typeorm';
import { Taste } from './taste.entity';

@EntityRepository(Taste)
export class TastesRepository extends Repository<Taste> {
  async createTaste(createTasteDto): Promise<Taste> {
    const { user, post, tasteType } = createTasteDto;

    const taste = this.create({
      taste: tasteType,
      post,
      user: 'testuser',
    });
    
    await this.save(taste);
    return taste;
  }
}
