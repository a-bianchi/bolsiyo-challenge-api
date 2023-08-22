import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateShopTable1692730982191 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS shop (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        name VARCHAR(250) NOT NULL,
        userId VARCHAR(36) NOT NULL,
        CONSTRAINT fk_user FOREIGN KEY (userId) REFERENCES user(id)
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS shop`);
  }
}
