import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import Faculty, { FacultySchema } from "./models/faculty.schema"
import FacultyService from "./faculty.service"

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Faculty.name,
        schema: FacultySchema,
      }
    ])
  ],
  exports: [],
  providers: [
    FacultyService,
  ]
})

export default class FacultyModule{};
