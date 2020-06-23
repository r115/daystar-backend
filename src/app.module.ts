import { Module } from '@nestjs/common';
import * as path from 'path';
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config"
import databaseConfig from "./config/database.config";
import { GraphQLModule } from "@nestjs/graphql"
import SchoolModule from "./modules/school/school.module"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(databaseConfig().CONNECTION_URI),
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      autoSchemaFile: path.join(process.cwd(), 'schema.gql'),
    }),
    SchoolModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
