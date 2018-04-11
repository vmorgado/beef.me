import { BeefController } from './beef.controller';
import { BeefService } from './beef.service';
import { Repository } from 'typeorm';
import { Beef } from './beef.entity';

describe('BeefController', () => {
  let beefController: BeefController;
  let beefService: BeefService;
  let beefRepository: Repository<Beef>;

  beforeEach(() => {
    beefRepository = new Repository<Beef>();
    beefService = new BeefService(beefRepository);
    beefController = new BeefController(beefService);
  });

  describe('findAll', () => {
    it('should return an array of beefs', async () => {
      const result = [];
      jest.spyOn(beefService, 'findAll').mockImplementation(() => result);
      expect(await beefController.findAll()).toBe(result);
    });
  });
  describe('findOne', () => {
    it('should return an array of beefs', async () => {
      const result = { beef: 'one'};
      jest.spyOn(beefService, 'findOne').mockImplementation(() => result);
      expect(await beefController.findOne(1)).toBe(result);
    });
  });
  describe('create', () => {
    it('should create a beef', async () => {
      const result = new Beef();
      jest.spyOn(beefService, 'create').mockImplementation(() => result);
      expect(await beefController.create(new Beef())).toBe(result);
    });
  });

});