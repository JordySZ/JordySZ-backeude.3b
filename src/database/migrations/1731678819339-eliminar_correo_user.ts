import { MigrationInterface, QueryRunner } from "typeorm";

export class EliminarCorreoUser1731678819339 implements MigrationInterface {
    name = 'EliminarCorreoUser1731678819339'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

}
