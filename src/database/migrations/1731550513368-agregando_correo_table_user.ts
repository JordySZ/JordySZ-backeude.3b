import { MigrationInterface, QueryRunner } from "typeorm";

export class AgregandoCorreoTableUser1731550513368 implements MigrationInterface {
    name = 'AgregandoCorreoTableUser1731550513368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
    }

}
