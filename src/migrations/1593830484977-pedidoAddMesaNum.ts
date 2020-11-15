import {MigrationInterface, QueryRunner} from "typeorm";

export class pedidoAddMesaNum1593830484977 implements MigrationInterface {
    name = 'pedidoAddMesaNum1593830484977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `pedido` ADD `MesaNumero` int NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `pedido` DROP COLUMN `MesaNumero`", undefined);
    }

}
