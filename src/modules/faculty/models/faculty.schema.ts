import { Prop, Schema } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema()
export default class Faculty extends Document {
  @Prop()
  first_name: string

  @Prop()
  last_name: string

  @Prop()
  middle_name: string

  @Prop()
  title: string
}
