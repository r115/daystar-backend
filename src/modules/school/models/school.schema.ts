import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema()
export default class School extends Document {
  @Prop()
  name: string;

  @Prop()
  slug: string;
}

export const SchoolSchema = SchemaFactory.createForClass(School);
