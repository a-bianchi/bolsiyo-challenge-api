import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { DeleteResult } from 'typeorm';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('CategoryController', () => {
  let controller: CategoryController;
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [
        CategoryService,
        {
          provide: getRepositoryToken(Category),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
    service = module.get<CategoryService>(CategoryService);
  });

  describe('getCategories', () => {
    it('should return an array of categories', async () => {
      const shopId = 1;
      const categories: Category[] = [];

      jest.spyOn(service, 'getCategoryByShopId').mockResolvedValue(categories);

      const result = await controller.getCategories(shopId);

      expect(result).toEqual(categories);
    });
  });

  describe('createCategory', () => {
    it('should create a new category', async () => {
      const createCategoryDto = {
        name: 'Test',
        shopId: 1,
      };
      const createdCategory: Category = {
        id: 1,
        ...createCategoryDto,
      };

      jest.spyOn(service, 'createCategory').mockResolvedValue(createdCategory);

      const result = await controller.createCategory(createCategoryDto);

      expect(result).toEqual(createdCategory);
    });
  });

  describe('deleteCategory', () => {
    it('should delete a category and return true', async () => {
      const categoryId = 1;
      const deleteResult: DeleteResult = { raw: 1, affected: 1 };

      jest.spyOn(service, 'deleteCategory').mockResolvedValue(deleteResult);

      const result = await controller.deleteCategory(categoryId);

      expect(result).toBe(true);
    });

    it('should return false when category is not deleted', async () => {
      const categoryId = 1;
      const deleteResult: DeleteResult = { raw: 0, affected: 0 };

      jest.spyOn(service, 'deleteCategory').mockResolvedValue(deleteResult);

      const result = await controller.deleteCategory(categoryId);

      expect(result).toBe(false);
    });
  });
});
