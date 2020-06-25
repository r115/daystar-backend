import { Field, ID, ObjectType } from "@nestjs/graphql"

@ObjectType()
export default class Faculty {
  @Field(() => ID)
  id: string;
}
