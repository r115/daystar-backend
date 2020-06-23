import { Module } from "@nestjs/common"
import SchoolResolver from "./graphql/resolvers/school.resolver"

@Module({
  imports: [],
  providers: [
    SchoolResolver,
  ],
  exports: []
})

export default class SchoolModule{}
