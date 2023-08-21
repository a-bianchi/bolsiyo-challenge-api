import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { QueryOptions } from './types';
import { ProductData } from './dto';

@Injectable()
export class ReportService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async getProductsByDateRange({
    startDate,
    endDate,
  }: QueryOptions): Promise<ProductData[]> {
    const query = `
	SELECT p.id AS productId, p.name AS productName, p.stock AS stock,
	       c.id AS categoryId, c.name AS categoryName
	FROM product p
	INNER JOIN category c ON p.categoryId = c.id
	WHERE p.createdAt >= ? AND p.createdAt <= ?
      `;
    const parameters = [startDate, endDate];

    return this.entityManager.query(query, parameters);
  }
}
