import { Args, Query, Resolver } from "@nestjs/graphql"
import Faculty from "../types/faculty.type"
import FacultyService from "../../faculty.service"

@Resolver(() => Faculty)
export default class FacultyResolver {
  constructor(
    private facultyService: FacultyService
  ) {
  }

  /**
   * Get a single faculty member
   *
   * @param id
   */
  @Query(() => Faculty)
  async getFacultyMember(@Args('id', { type: () => String }) id: string) {
    return this.facultyService.find(id);
  }
}
