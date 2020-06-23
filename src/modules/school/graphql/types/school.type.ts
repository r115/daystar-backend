import { Field, ID, ObjectType } from "@nestjs/graphql"

@ObjectType()
export default class School {
  @Field(() => ID)
  readonly id: string;
}
