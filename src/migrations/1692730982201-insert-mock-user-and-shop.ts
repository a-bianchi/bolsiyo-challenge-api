import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bycryptjs from 'bcryptjs';
import { v4 as uuid } from 'uuid';

export class InsertMockUserAndShop1692730982201 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //await queryRunner.startTransaction();
    try {
      const userIdAdmin = uuid();
      const userIdUser = uuid();
      const password = await bycryptjs.hash('123456', 10);

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
