import { Router } from "express";
import { CompanyController } from "./controllers/CompanyController";

const routes = Router();

// Criando uma empresa
routes.post("/company", new CompanyController().create);
// Lendo todas as cadastradas no banco de dados
routes.get("/companies", new CompanyController().readAll);
// Lendo somente uma empresa pelo CNPJ
routes.get("/companies/:cnpj", new CompanyController().readOne);
// Excluindo uma empresa
routes.delete("/company/:cnpj", new CompanyController().deleteOne);
// Atualizando um cadastro
routes.put("/company/:cnpj", new CompanyController().updateOne);

export default routes;