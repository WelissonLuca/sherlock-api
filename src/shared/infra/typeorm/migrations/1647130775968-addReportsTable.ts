import { MigrationInterface, QueryRunner } from 'typeorm';

export class addReportsTable1647130775968 implements MigrationInterface {
  name = 'addReportsTable1647130775968';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "reports" ("id" character varying NOT NULL, "localization" jsonb NOT NULL, "status" character varying NOT NULL, "problem" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d9013193989303580053c0b5ef6" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "reports"`);
  }
}
