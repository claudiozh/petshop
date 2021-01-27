import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatsModule } from './modules/cats/cats.module';
import { logger } from './middleware/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

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
		CatsModule
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
