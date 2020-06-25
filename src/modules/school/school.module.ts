import { Module } from "@nestjs/common"
import SchoolResolver from "./graphql/resolvers/school.resolver"
import { MongooseModule } from "@nestjs/mongoose"
import School, { SchoolSchema } from "./models/school.schema"
import { SchoolService } from "./school.service"

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: School.name,
        schema: SchoolSchema
      }
    ])
  ],
  providers: [
    SchoolService,
    SchoolResolver,
  ],
  exports: []
})

export default class SchoolModule {}
