import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertMockProducts1692730982203 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //await queryRunner.startTransaction();
    try {
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

      //await queryRunner.commitTransaction();
    } catch (err) {
      // await queryRunner.rollbackTransaction();
      throw err;
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM bolsiyo.role WHERE id IN (1, 2);
    `);
  }
}
