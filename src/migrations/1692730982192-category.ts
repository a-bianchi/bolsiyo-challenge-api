import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCategoryTable1692730982192 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS category (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        shopId INT NOT NULL,
        CONSTRAINT fk_shop FOREIGN KEY (shopId) REFERENCES shop(id)
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS category`);
  }
}
