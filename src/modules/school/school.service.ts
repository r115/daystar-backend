import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import School from "./models/school.schema"
import { Model } from "mongoose"

@Injectable()
export class SchoolService {
  constructor(@InjectModel(School.name) private schoolModel: Model<School>) {
  }

  /**
   * Find a school using the school id
   */
  async find(id: string): Promise<School> {
    return this.schoolModel.findById(id);
  }
}
