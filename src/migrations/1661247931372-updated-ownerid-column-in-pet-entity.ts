import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedOwneridColumnInPetEntity1661247931372 implements MigrationInterface {
    name = 'updatedOwneridColumnInPetEntity1661247931372'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "pet" DROP CONSTRAINT "FK_20acc45f799c122ec3735a3b8b1"
        `);
        await queryRunner.query(`
            ALTER TABLE "pet"
            ALTER COLUMN "ownerId"
            SET NOT NULL
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
            ALTER TABLE "pet"
            ALTER COLUMN "ownerId" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "pet"
            ADD CONSTRAINT "FK_20acc45f799c122ec3735a3b8b1" FOREIGN KEY ("ownerId") REFERENCES "owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

}
