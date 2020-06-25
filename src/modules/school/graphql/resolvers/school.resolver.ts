import { Args, Query, Resolver } from "@nestjs/graphql"
import School from "../types/school.type"
import { Hello } from "../types/hello.type"
import { SchoolService } from "../../school.service"

@Resolver(() => School)
export default class SchoolResolver {
  constructor(
    private schoolService: SchoolService,
  ) {
  }

  /**
   * Find a school
   */
  @Query(() => School)
  async getSchool(@Args('id', { type: () => String }) id: string) {
   return this.schoolService.find(id);
  }
}
