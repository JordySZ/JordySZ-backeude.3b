import { MigrationInterface, QueryRunner } from "typeorm";

export class EliminandoNombreTableUser1731634261729 implements MigrationInterface {
    name = 'EliminandoNombreTableUser1731634261729'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
    }

}
