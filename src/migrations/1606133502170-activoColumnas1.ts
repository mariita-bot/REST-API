import {MigrationInterface, QueryRunner} from "typeorm";

export class activoColumnas11606133502170 implements MigrationInterface {
    name = 'activoColumnas11606133502170'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `cajachica` CHANGE `Activo` `Activo` tinyint NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `categoria` CHANGE `Activo` `Activo` tinyint NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `proveedor` CHANGE `Activo` `Activo` tinyint NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `stock_producto` CHANGE `Activo` `Activo` tinyint NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `provee_producto` CHANGE `Activo` `Activo` tinyint NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `producto` CHANGE `Activo` `Activo` tinyint NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `pedido_detalle` CHANGE `Activo` `Activo` tinyint NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `mesa` CHANGE `Activo` `Activo` tinyint NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `reserva` CHANGE `Activo` `Activo` tinyint NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `cliente` CHANGE `Activo` `Activo` tinyint NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `cargo` CHANGE `Activo` `Activo` tinyint NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `empleado` CHANGE `Activo` `Activo` tinyint NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `pedido` CHANGE `Activo` `Activo` tinyint NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `flujodinero` CHANGE `Activo` `Activo` tinyint NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `flujodineroitem` CHANGE `Activo` `Activo` tinyint NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `billete` CHANGE `Activo` `Activo` tinyint NOT NULL DEFAULT '1'");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `billete` CHANGE `Activo` `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `flujodineroitem` CHANGE `Activo` `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `flujodinero` CHANGE `Activo` `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `pedido` CHANGE `Activo` `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `empleado` CHANGE `Activo` `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `cargo` CHANGE `Activo` `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `cliente` CHANGE `Activo` `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `reserva` CHANGE `Activo` `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `mesa` CHANGE `Activo` `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `pedido_detalle` CHANGE `Activo` `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `producto` CHANGE `Activo` `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `provee_producto` CHANGE `Activo` `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `stock_producto` CHANGE `Activo` `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `proveedor` CHANGE `Activo` `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `categoria` CHANGE `Activo` `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `cajachica` CHANGE `Activo` `Activo` tinyint NOT NULL");
    }

}
