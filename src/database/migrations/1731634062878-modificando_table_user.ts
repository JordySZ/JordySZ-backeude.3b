import { MigrationInterface, QueryRunner } from "typeorm";

export class ModificandoTableUser1731634062878 implements MigrationInterface {
    name = 'ModificandoTableUser1731634062878'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

}
