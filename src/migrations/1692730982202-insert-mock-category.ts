import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertMockCategory1692730982202 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //await queryRunner.startTransaction();
    try {
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
      //await queryRunner.commitTransaction();
    } catch (err) {
      // await queryRunner.rollbackTransaction();
      throw err;
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(``);
  }
}
