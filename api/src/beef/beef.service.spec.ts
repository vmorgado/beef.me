import { BeefController } from './beef.controller';
import { BeefService } from './beef.service';
import { Repository } from 'typeorm';
import { Beef } from './beef.entity';

describe('BeefController', () => {
  let beefService: BeefService;
  let beefRepository: Repository<Beef>;

  beforeEach(() => {
    beefRepository = new Repository<Beef>();
    beefService = new BeefService(beefRepository);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(beefService, 'findAll').mockImplementation(() => result);
    });
  });
});