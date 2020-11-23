import {MigrationInterface, QueryRunner} from "typeorm";

export class activoColumnas1606133076832 implements MigrationInterface {
    name = 'activoColumnas1606133076832'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `cajachica` ADD `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `categoria` ADD `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `proveedor` ADD `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `stock_producto` ADD `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `provee_producto` ADD `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `producto` ADD `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `pedido_detalle` ADD `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `mesa` ADD `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `reserva` ADD `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `cliente` ADD `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `cargo` ADD `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `empleado` ADD `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `pedido` ADD `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `flujodinero` ADD `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `flujodineroitem` ADD `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `billete` ADD `Activo` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `producto` DROP FOREIGN KEY `FK_dd6297be63ca8b59b962e97425d`");
        await queryRunner.query("ALTER TABLE `producto` CHANGE `Descripcion` `Descripcion` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `producto` CHANGE `categoriaIdCategoria` `categoriaIdCategoria` int NULL");
        await queryRunner.query("ALTER TABLE `producto` ADD CONSTRAINT `FK_dd6297be63ca8b59b962e97425d` FOREIGN KEY (`categoriaIdCategoria`) REFERENCES `categoria`(`IdCategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `producto` DROP FOREIGN KEY `FK_dd6297be63ca8b59b962e97425d`");
        await queryRunner.query("ALTER TABLE `producto` CHANGE `categoriaIdCategoria` `categoriaIdCategoria` int NOT NULL");
        await queryRunner.query("ALTER TABLE `producto` CHANGE `Descripcion` `Descripcion` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `producto` ADD CONSTRAINT `FK_dd6297be63ca8b59b962e97425d` FOREIGN KEY (`categoriaIdCategoria`) REFERENCES `categoria`(`IdCategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `billete` DROP COLUMN `Activo`");
        await queryRunner.query("ALTER TABLE `flujodineroitem` DROP COLUMN `Activo`");
        await queryRunner.query("ALTER TABLE `flujodinero` DROP COLUMN `Activo`");
        await queryRunner.query("ALTER TABLE `pedido` DROP COLUMN `Activo`");
        await queryRunner.query("ALTER TABLE `empleado` DROP COLUMN `Activo`");
        await queryRunner.query("ALTER TABLE `cargo` DROP COLUMN `Activo`");
        await queryRunner.query("ALTER TABLE `cliente` DROP COLUMN `Activo`");
        await queryRunner.query("ALTER TABLE `reserva` DROP COLUMN `Activo`");
        await queryRunner.query("ALTER TABLE `mesa` DROP COLUMN `Activo`");
        await queryRunner.query("ALTER TABLE `pedido_detalle` DROP COLUMN `Activo`");
        await queryRunner.query("ALTER TABLE `producto` DROP COLUMN `Activo`");
        await queryRunner.query("ALTER TABLE `provee_producto` DROP COLUMN `Activo`");
        await queryRunner.query("ALTER TABLE `stock_producto` DROP COLUMN `Activo`");
        await queryRunner.query("ALTER TABLE `proveedor` DROP COLUMN `Activo`");
        await queryRunner.query("ALTER TABLE `categoria` DROP COLUMN `Activo`");
        await queryRunner.query("ALTER TABLE `cajachica` DROP COLUMN `Activo`");
    }

}
