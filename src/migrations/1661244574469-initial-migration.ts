import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1661244574469 implements MigrationInterface {
    name = 'initialMigration1661244574469'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "pet" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "type" character varying,
                CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "pet"
        `);
    }

}
