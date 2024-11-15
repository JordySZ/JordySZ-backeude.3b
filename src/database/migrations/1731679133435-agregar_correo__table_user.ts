import { MigrationInterface, QueryRunner } from "typeorm";

export class AgregarCorreo_tableUser1731679133435 implements MigrationInterface {
    name = 'AgregarCorreo_tableUser1731679133435'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

}
