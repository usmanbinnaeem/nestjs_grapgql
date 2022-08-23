import { MigrationInterface, QueryRunner } from "typeorm";

export class addedOwnerEntityAndUpdatedPetsEntity1661247703711 implements MigrationInterface {
    name = 'addedOwnerEntityAndUpdatedPetsEntity1661247703711'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "owner" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                CONSTRAINT "PK_8e86b6b9f94aece7d12d465dc0c" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "pet"
            ADD "ownerId" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "pet"
            ADD CONSTRAINT "FK_20acc45f799c122ec3735a3b8b1" FOREIGN KEY ("ownerId") REFERENCES "owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "pet" DROP CONSTRAINT "FK_20acc45f799c122ec3735a3b8b1"
        `);
        await queryRunner.query(`
            ALTER TABLE "pet" DROP COLUMN "ownerId"
        `);
        await queryRunner.query(`
            DROP TABLE "owner"
        `);
    }

}
