import {MigrationInterface, QueryRunner} from "typeorm";

export class initialMigration1591926609109 implements MigrationInterface {
    name = 'initialMigration1591926609109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `cajachica` (`IdCajachica` int NOT NULL AUTO_INCREMENT, `Created_at` datetime NOT NULL, `Closed_at` datetime NOT NULL, `CantidadDeApertura` int NOT NULL, `CantidadDeCierre` int NOT NULL, PRIMARY KEY (`IdCajachica`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `categoria` (`IdCategoria` int NOT NULL AUTO_INCREMENT, `NombreCategoria` varchar(255) NOT NULL, PRIMARY KEY (`IdCategoria`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `proveedor` (`IdProveedor` int NOT NULL AUTO_INCREMENT, `NombreProveedor` varchar(255) NOT NULL, `Direccion` varchar(255) NOT NULL, `Telefono` varchar(255) NOT NULL, PRIMARY KEY (`IdProveedor`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `stock_producto` (`IdStock` int NOT NULL AUTO_INCREMENT, `Cantidad` int NOT NULL, `Fecha_Ingreso` datetime NOT NULL, `Precio_Entrada` float NOT NULL, `proveeproductoIdProveeProducto` int NULL, `pedidoDetalleIdPedidoDetalle` int NULL, PRIMARY KEY (`IdStock`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `provee_producto` (`IdProveeProducto` int NOT NULL AUTO_INCREMENT, `Cantidad` int NOT NULL, `FechaEntrada` datetime NOT NULL, `PrecioEntrada` float NOT NULL, `Observacion` varchar(255) NOT NULL, `MontoTotal` float NOT NULL, `proveedorIdProveedor` int NULL, `productoIdProducto` int NULL, PRIMARY KEY (`IdProveeProducto`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `producto` (`IdProducto` int NOT NULL AUTO_INCREMENT, `NombreProducto` varchar(255) NOT NULL, `PrecioVenta` float NOT NULL, `Estado` tinyint NOT NULL, `Descripcion` varchar(255) NOT NULL, `Tamanio` int NOT NULL, `categoriaIdCategoria` int NULL, PRIMARY KEY (`IdProducto`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `pedido_detalle` (`IdPedidoDetalle` int NOT NULL AUTO_INCREMENT, `Subtotal` float NOT NULL, `Cantidad` int NOT NULL, `Fecha` datetime NOT NULL, `pedidoIdPedido` int NULL, `productoIdProducto` int NULL, PRIMARY KEY (`IdPedidoDetalle`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `mesa` (`IdMesa` int NOT NULL AUTO_INCREMENT, `Numero` int NOT NULL, `Estado` tinyint NOT NULL, `Descripcion` varchar(255) NOT NULL, PRIMARY KEY (`IdMesa`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `reserva` (`IdReserva` int NOT NULL AUTO_INCREMENT, `Fecha` datetime NOT NULL, `clienteIdCliente` int NULL, `mesaIdMesa` int NULL, PRIMARY KEY (`IdReserva`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `cliente` (`IdCliente` int NOT NULL AUTO_INCREMENT, `NombreCliente` varchar(255) NOT NULL, `Telefono` varchar(255) NULL, `Cedula` varchar(255) NULL, PRIMARY KEY (`IdCliente`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `cargo` (`IdCargo` int NOT NULL AUTO_INCREMENT, `NombreCargo` varchar(255) NOT NULL, PRIMARY KEY (`IdCargo`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `empleado` (`IdEmpleado` int NOT NULL AUTO_INCREMENT, `NombreEmpleado` varchar(255) NOT NULL, `Direccion` varchar(255) NOT NULL, `Cedula` varchar(255) NOT NULL, `Sexo` tinyint NOT NULL, `Estado` tinyint NOT NULL, `Nombre_usuario` varchar(255) NULL, `Contrasenia` varchar(255) NULL, `cargoIdCargo` int NULL, PRIMARY KEY (`IdEmpleado`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `pedido` (`IdPedido` int NOT NULL AUTO_INCREMENT, `Estado` tinyint NOT NULL, `Observacion` varchar(255) NOT NULL, `clienteIdCliente` int NULL, `empleadoIdEmpleado` int NULL, `flujodineroIdFlujodinero` int NULL, PRIMARY KEY (`IdPedido`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `flujodinero` (`IdFlujodinero` int NOT NULL AUTO_INCREMENT, `Created_at` datetime NULL, `Usuario_Nombre` varchar(255) NOT NULL, `Ingreso_cordoba` float NOT NULL, `Egreso_cordoba` float NOT NULL, `Saldo` float NOT NULL, `Observaciones` varchar(255) NOT NULL, `cajachicaIdCajachica` int NULL, PRIMARY KEY (`IdFlujodinero`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `flujodineroitem` (`IdFlujodineroitem` int NOT NULL AUTO_INCREMENT, `Cantidad` int NOT NULL, `Denominacion` int NOT NULL, `flujodineroIdFlujodinero` int NULL, `billeteIdBillete` int NULL, PRIMARY KEY (`IdFlujodineroitem`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `billete` (`IdBillete` int NOT NULL AUTO_INCREMENT, `Nombre` varchar(255) NOT NULL, `Valor` int NOT NULL, PRIMARY KEY (`IdBillete`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `stock_producto` ADD CONSTRAINT `FK_30f29250e9d881864ebdf46992e` FOREIGN KEY (`proveeproductoIdProveeProducto`) REFERENCES `provee_producto`(`IdProveeProducto`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `stock_producto` ADD CONSTRAINT `FK_2c8ff864bfaaf1e7b5e03ee4fb3` FOREIGN KEY (`pedidoDetalleIdPedidoDetalle`) REFERENCES `pedido_detalle`(`IdPedidoDetalle`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `provee_producto` ADD CONSTRAINT `FK_d3bd1d932fbd5fd1c043dc9be86` FOREIGN KEY (`proveedorIdProveedor`) REFERENCES `proveedor`(`IdProveedor`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `provee_producto` ADD CONSTRAINT `FK_afa20fa6f673540016c1ab55bce` FOREIGN KEY (`productoIdProducto`) REFERENCES `producto`(`IdProducto`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `producto` ADD CONSTRAINT `FK_dd6297be63ca8b59b962e97425d` FOREIGN KEY (`categoriaIdCategoria`) REFERENCES `categoria`(`IdCategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `pedido_detalle` ADD CONSTRAINT `FK_fffa4022bc2ab62f4a47af2b2ac` FOREIGN KEY (`pedidoIdPedido`) REFERENCES `pedido`(`IdPedido`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `pedido_detalle` ADD CONSTRAINT `FK_1f6cb5806dc71ebf25544e2983b` FOREIGN KEY (`productoIdProducto`) REFERENCES `producto`(`IdProducto`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `reserva` ADD CONSTRAINT `FK_0b53bff5e4efb21ba016e9302fb` FOREIGN KEY (`clienteIdCliente`) REFERENCES `cliente`(`IdCliente`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `reserva` ADD CONSTRAINT `FK_889037045cb89b019b0e77add04` FOREIGN KEY (`mesaIdMesa`) REFERENCES `mesa`(`IdMesa`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `empleado` ADD CONSTRAINT `FK_35a8dee732c110929835cbbb0da` FOREIGN KEY (`cargoIdCargo`) REFERENCES `cargo`(`IdCargo`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `pedido` ADD CONSTRAINT `FK_9c0fb5c402d2ab3cf633e321d34` FOREIGN KEY (`clienteIdCliente`) REFERENCES `cliente`(`IdCliente`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `pedido` ADD CONSTRAINT `FK_abbc458ec612b5fc086c4ef05c3` FOREIGN KEY (`empleadoIdEmpleado`) REFERENCES `empleado`(`IdEmpleado`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `pedido` ADD CONSTRAINT `FK_dcd5bfa09683bfd06daf45574aa` FOREIGN KEY (`flujodineroIdFlujodinero`) REFERENCES `flujodinero`(`IdFlujodinero`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `flujodinero` ADD CONSTRAINT `FK_7bd19a3f965e800e009f6fe1cc9` FOREIGN KEY (`cajachicaIdCajachica`) REFERENCES `cajachica`(`IdCajachica`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `flujodineroitem` ADD CONSTRAINT `FK_850dea6b46bd0aea406011612fb` FOREIGN KEY (`flujodineroIdFlujodinero`) REFERENCES `flujodinero`(`IdFlujodinero`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `flujodineroitem` ADD CONSTRAINT `FK_3cbc195524326717c730857d652` FOREIGN KEY (`billeteIdBillete`) REFERENCES `billete`(`IdBillete`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `flujodineroitem` DROP FOREIGN KEY `FK_3cbc195524326717c730857d652`", undefined);
        await queryRunner.query("ALTER TABLE `flujodineroitem` DROP FOREIGN KEY `FK_850dea6b46bd0aea406011612fb`", undefined);
        await queryRunner.query("ALTER TABLE `flujodinero` DROP FOREIGN KEY `FK_7bd19a3f965e800e009f6fe1cc9`", undefined);
        await queryRunner.query("ALTER TABLE `pedido` DROP FOREIGN KEY `FK_dcd5bfa09683bfd06daf45574aa`", undefined);
        await queryRunner.query("ALTER TABLE `pedido` DROP FOREIGN KEY `FK_abbc458ec612b5fc086c4ef05c3`", undefined);
        await queryRunner.query("ALTER TABLE `pedido` DROP FOREIGN KEY `FK_9c0fb5c402d2ab3cf633e321d34`", undefined);
        await queryRunner.query("ALTER TABLE `empleado` DROP FOREIGN KEY `FK_35a8dee732c110929835cbbb0da`", undefined);
        await queryRunner.query("ALTER TABLE `reserva` DROP FOREIGN KEY `FK_889037045cb89b019b0e77add04`", undefined);
        await queryRunner.query("ALTER TABLE `reserva` DROP FOREIGN KEY `FK_0b53bff5e4efb21ba016e9302fb`", undefined);
        await queryRunner.query("ALTER TABLE `pedido_detalle` DROP FOREIGN KEY `FK_1f6cb5806dc71ebf25544e2983b`", undefined);
        await queryRunner.query("ALTER TABLE `pedido_detalle` DROP FOREIGN KEY `FK_fffa4022bc2ab62f4a47af2b2ac`", undefined);
        await queryRunner.query("ALTER TABLE `producto` DROP FOREIGN KEY `FK_dd6297be63ca8b59b962e97425d`", undefined);
        await queryRunner.query("ALTER TABLE `provee_producto` DROP FOREIGN KEY `FK_afa20fa6f673540016c1ab55bce`", undefined);
        await queryRunner.query("ALTER TABLE `provee_producto` DROP FOREIGN KEY `FK_d3bd1d932fbd5fd1c043dc9be86`", undefined);
        await queryRunner.query("ALTER TABLE `stock_producto` DROP FOREIGN KEY `FK_2c8ff864bfaaf1e7b5e03ee4fb3`", undefined);
        await queryRunner.query("ALTER TABLE `stock_producto` DROP FOREIGN KEY `FK_30f29250e9d881864ebdf46992e`", undefined);
        await queryRunner.query("DROP TABLE `billete`", undefined);
        await queryRunner.query("DROP TABLE `flujodineroitem`", undefined);
        await queryRunner.query("DROP TABLE `flujodinero`", undefined);
        await queryRunner.query("DROP TABLE `pedido`", undefined);
        await queryRunner.query("DROP TABLE `empleado`", undefined);
        await queryRunner.query("DROP TABLE `cargo`", undefined);
        await queryRunner.query("DROP TABLE `cliente`", undefined);
        await queryRunner.query("DROP TABLE `reserva`", undefined);
        await queryRunner.query("DROP TABLE `mesa`", undefined);
        await queryRunner.query("DROP TABLE `pedido_detalle`", undefined);
        await queryRunner.query("DROP TABLE `producto`", undefined);
        await queryRunner.query("DROP TABLE `provee_producto`", undefined);
        await queryRunner.query("DROP TABLE `stock_producto`", undefined);
        await queryRunner.query("DROP TABLE `proveedor`", undefined);
        await queryRunner.query("DROP TABLE `categoria`", undefined);
        await queryRunner.query("DROP TABLE `cajachica`", undefined);
    }

}
