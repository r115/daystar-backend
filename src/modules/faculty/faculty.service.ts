import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import Faculty from "./models/faculty.schema"
import { Model } from "mongoose"

@Injectable()
export default class FacultyService {
  constructor(@InjectModel(Faculty.name) private facultyModel: Model<Faculty>) {
  }

  /**
   * Find a faculty by its id
   *
   * @param id
   */
  async find(id: string): Promise<Faculty> {
    return this.facultyModel.findById(id);
  }
}
