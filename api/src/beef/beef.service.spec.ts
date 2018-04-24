import { BeefController } from './beef.controller';
import { BeefService } from './beef.service';
import { Repository } from 'typeorm';
import { Beef } from './beef.entity';

describe('BeefService', () => {
  let beefService: BeefService;
  let beefRepository: Repository<Beef>;

  beforeEach(() => {
    beefRepository = new Repository<Beef>();
    beefService = new BeefService(beefRepository);
  });

  describe('findAll', () => {
    it('should return a promise of an array of beefs', async () => {
      const result = [];
      const findAllMock = jest.spyOn(beefRepository, 'find').mockImplementation(() => result);
      expect(await beefService.findAll()).toEqual([]);
      expect(findAllMock).toHaveBeenCalled();
    });
  });
  describe('findOne', () => {
    it('should return a promise of a beef', async () => {
      const findOneByIdMock = jest.spyOn(beefRepository, 'findOneById').mockImplementation((id) => {
        const beef = new Beef();
        beef.id = id;
        return beef;
      });
      const result = await beefService.findOne(1);
      expect(result.id).toEqual(1);
      expect(findOneByIdMock).toHaveBeenCalled();
    });
  });
  describe('create', () => {
    it('should return a promise of a beef', async () => {
      const result = new Beef();
      const createMock = jest.spyOn(beefRepository, 'create').mockImplementation((beef) => {
        beef.id = 1;
        return beef;
      });
      const data = await beefService.create(new Beef());
      expect(data.id).toEqual(1);
      expect(createMock).toHaveBeenCalled();
    });
  });
});