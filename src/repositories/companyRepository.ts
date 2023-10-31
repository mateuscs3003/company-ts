import { appDataSource } from "../data-source";
import { Company } from "../models/Company";

export const companyRepository = appDataSource.getRepository(Company);