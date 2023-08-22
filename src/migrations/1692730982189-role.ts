import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRoleTable1692730982189 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS role (
        id VARCHAR(36) NOT NULL PRIMARY KEY,
        name VARCHAR(250) NOT NULL UNIQUE,
        description VARCHAR(250) NOT NULL
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS role`);
  }
}
