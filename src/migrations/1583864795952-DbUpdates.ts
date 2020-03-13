import {MigrationInterface, QueryRunner} from "typeorm";

export class DbUpdates1583864795952 implements MigrationInterface {
    name = 'DbUpdates1583864795952'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "pricing_model" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, "pricing" text, CONSTRAINT "PK_a5a3107c72bf9d54175a9524e02" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "machines" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, "pricing_model_id" integer, CONSTRAINT "PK_7b0817c674bb984650c5274e713" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "machines" ADD CONSTRAINT "FK_2167ee5b64aa421597d116880df" FOREIGN KEY ("pricing_model_id") REFERENCES "pricing_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "machines" DROP CONSTRAINT "FK_2167ee5b64aa421597d116880df"`, undefined);
        await queryRunner.query(`DROP TABLE "machines"`, undefined);
        await queryRunner.query(`DROP TABLE "pricing_model"`, undefined);
    }

}
