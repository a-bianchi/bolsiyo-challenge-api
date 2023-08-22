import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bycryptjs from 'bcryptjs';
import { v4 as uuid } from 'uuid';

export class Initial1692730982188 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.startTransaction();

    try {
      const userIdAdmin = uuid();
      const userIdUser = uuid();
      const password = await bycryptjs.hash('123456', 10);

      await queryRunner.query(
        `
          INSERT INTO bolsiyo.role (id, name, description)
          VALUES
            (1, 'ADMIN', 'Administrator'),
            (2, 'USER', 'User');
        `,
      );

      await queryRunner.query(
        `
          INSERT INTO bolsiyo.user (id, roleId, email, password, hashrt, isActive, createdAt, updatedAt)
          VALUES
            ('${userIdAdmin}', 1, 'test-admin@test.com', '${password}', null, 1, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6)),
            ('${userIdUser}', 2, 'test-user@test.com', '${password}', null, 1, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6));
        `,
      );

      await queryRunner.query(
        `
          INSERT INTO bolsiyo.shop (id, name, userId)
          VALUES
          (1, 'Test Shop 1', '${userIdAdmin}');
        `,
      );

      await queryRunner.query(
        `
          INSERT INTO bolsiyo.shop (id, name, userId)
          VALUES
          (2, 'Test Shop 2', '${userIdAdmin}');
        `,
      );

      await queryRunner.query(
        `
          INSERT INTO bolsiyo.category(id, name, shopId)
          VALUES
          (1, 'bebidas', 1);
        `,
      );

      await queryRunner.query(
        `
          INSERT INTO bolsiyo.category(id, name, shopId)
          VALUES
          (2, 'limpieza', 1);
        `,
      );

      await queryRunner.query(
        `
          INSERT INTO bolsiyo.product
          (name, pricePurchase, priceSale, stock, shopId, categoryId, createdAt, updatedAt, deletedAt)
          VALUES
          ('coca cola', 150, 250, 15, 1, 1, DATE_SUB(NOW(), INTERVAL 15 DAY) , CURRENT_TIMESTAMP(6), null),
          ('cerveza', 200, 350, 200, 1, 1, DATE_SUB(NOW(), INTERVAL 10 DAY) , CURRENT_TIMESTAMP(6), null),
          ('agua mineral', 100, 200, 10, 1, 1, DATE_SUB(NOW(), INTERVAL 5 DAY) , CURRENT_TIMESTAMP(6), null),
          ('vino', 700, 800, 35, 1, 1, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), null)
          ;
        `,
      );

      await queryRunner.query(
        `
          INSERT INTO bolsiyo.product
          (name, pricePurchase, priceSale, stock, shopId, categoryId, createdAt, updatedAt, deletedAt)
          VALUES
          ('jabon', 100, 250, 15, 2, 2, DATE_SUB(NOW(), INTERVAL 15 DAY) , CURRENT_TIMESTAMP(6), null),
          ('franela', 300, 350, 200, 2, 2, DATE_SUB(NOW(), INTERVAL 10 DAY) , CURRENT_TIMESTAMP(6), null),
          ('escoba', 600, 700, 10, 2, 2, DATE_SUB(NOW(), INTERVAL 5 DAY) , CURRENT_TIMESTAMP(6), null),
          ('esponja de acero', 700, 800, 35, 2, 2, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), null);
        `,
      );

      await queryRunner.commitTransaction();
    } catch (err) {
      // Si hay algún error, se realiza un rollback
      await queryRunner.rollbackTransaction();
      throw err;
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM bolsiyo.role WHERE id IN (1, 2);
    `);
  }
}
