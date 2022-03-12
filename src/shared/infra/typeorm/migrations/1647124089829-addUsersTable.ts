import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUsersTable1647124089829 implements MigrationInterface {
  name = 'addUsersTable1647124089829';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`
    );
    await queryRunner.query(`ALTER TABLE "public"."users" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "public"."users" ADD "id" character varying NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`
    );
    await queryRunner.query(`ALTER TABLE "public"."users" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "public"."users" ADD "id" uuid NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "public"."users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`
    );
  }
}
