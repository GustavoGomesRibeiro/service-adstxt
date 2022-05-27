import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAdsTable1653672049300 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXIST "uuid-ossp"')
        
        await queryRunner.createTable( new Table({
           name: 'ads',
           columns: [
               {
                   name: 'id',
                   type: 'uuid',
                   isPrimary: true,
                   generationStrategy: 'uuid',
                   default: 'uuid_generate_v4()',
               },
               {
                   name: 'adsTxt',
                   type: 'varchar'
               },
               {
                   name: 'created_at',
                   type: 'timestamp'
               },
               {
                   name: 'updated_at',
                   type: 'timestamp'
               },
           ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('ads');
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }
}


