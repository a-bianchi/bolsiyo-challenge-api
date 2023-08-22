import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductTable1692730982193 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS product (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        pricePurchase DECIMAL(10, 2) NOT NULL,
        priceSale DECIMAL(10, 2) NOT NULL,
        stock INT NOT NULL,
        shopId INT NOT NULL,
        categoryId INT NOT NULL,
        createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        deletedAt TIMESTAMP NULL,
        CONSTRAINT fk_shop_product FOREIGN KEY (shopId) REFERENCES shop(id),
        CONSTRAINT fk_category FOREIGN KEY (categoryId) REFERENCES category(id)
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS product`);
  }
}
