import { Field, ID, ObjectType } from "@nestjs/graphql"

@ObjectType()
export default class School {
  @Field(() => ID)
  id: string;

  @Field({ nullable:true })
  name: string;

  @Field({ nullable:true })
  slug: string;
}
