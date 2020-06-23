import { Query, Resolver } from "@nestjs/graphql"
import School from "../types/school.type"
import { Hello } from "../types/hello.type"

@Resolver(() => School)
export default class SchoolResolver {
  @Query(() => Hello)
  hello(): Hello {
    return { world: 'Hello World' };
  }
}
