import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertMockDataRole1692730982200 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //await queryRunner.startTransaction();
    try {
      await queryRunner.query(
        `
          INSERT INTO bolsiyo.role (id, name, description)
          VALUES
            (1, 'ADMIN', 'Administrator'),
            (2, 'USER', 'User');
        `,
      );
      //await queryRunner.commitTransaction();
    } catch (err) {
      //await queryRunner.rollbackTransaction();
      throw err;
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(``);
  }
}
