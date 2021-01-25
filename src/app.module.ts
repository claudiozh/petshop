import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { logger } from './middleware/logger.middleware';

@Module({
	imports: [CatsModule]
})

// export class AppModule implements NestModule {
// 	configure(consumer: MiddlewareConsumer) {
// 		consumer
// 			.apply(logger)
// 			.forRoutes('cats')

// 	}
// }
export class AppModule { }
