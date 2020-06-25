import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import Faculty, { FacultySchema } from "./models/faculty.schema"
import FacultyService from "./faculty.service"
import FacultyResolver from "./graphql/resolver/faculty.resolver"

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Faculty.name,
        schema: FacultySchema,
        collection: "faculty"
      }
    ])
  ],
  exports: [],
  providers: [
    FacultyService,
    FacultyResolver,
  ]
})

export default class FacultyModule{};
