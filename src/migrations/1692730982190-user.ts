import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1692730982190 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS user (
        id VARCHAR(36) NOT NULL PRIMARY KEY,
        roleId INT NOT NULL DEFAULT 1,
        email VARCHAR(250) NOT NULL UNIQUE,
        password VARCHAR(250) NOT NULL,
        hashrt VARCHAR(250),
        isActive BOOLEAN NOT NULL DEFAULT true,
        createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    //   await queryRunner.query(`
    //   ALTER TABLE user
    //   ADD CONSTRAINT fk_role
    //   FOREIGN KEY (roleId)
    //   REFERENCES role(id)
    //   ON DELETE RESTRICT
    //   ON UPDATE CASCADE
    // `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS user`);
  }
}
