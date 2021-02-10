import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { MainModule } from './modules/main/main.module';

@Module({
	imports: [
		// TypeOrmModule.forRoot({
		// 	type: 'postgres',
		// 	host: '127.0.0.1',
		// 	port: 5432,
		// 	username: 'postgres',
		// 	password: 'postgres',
		// 	database: 'petshop',
		// 	entities: [
		// 		__dirname + '/**/*.entity{.ts,.js}',
		// 	],
		// 	migrations: ['src/migration/*{.ts,.js}'],
		// 	cli: {
		// 		migrationsDir: 'src/migration'
		// 	},
		// }),
		TypeOrmModule.forRoot(),
		MainModule
	]
})

// export class AppModule implements NestModule {
// 	configure(consumer: MiddlewareConsumer) {
// 		consumer
// 			.apply(logger)
// 			.forRoutes('cats')

// 	}
// }
// export class AppModule { }

export class AppModule {
	constructor(private connection: Connection) { }
}
