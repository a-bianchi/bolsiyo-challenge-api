import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStockMovementTable1692730982194
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS stock_movement (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        productId INT NOT NULL,
        stock INT NOT NULL,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (productId) REFERENCES product(id)
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS stock_movement`);
  }
}
