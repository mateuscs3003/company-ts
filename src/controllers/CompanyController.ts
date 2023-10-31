import { Request, Response } from "express";
import { companyRepository } from "../repositories/companyRepository";
import { Company } from "../models/Company";

export class CompanyController {
    
    async create(req: Request, res: Response) {
        const { nome_cliente, senha, nome_empresa, cnpj, cep, endereco, numero, telefone, email } = req.body;
        const company = companyRepository.create({
            nome_cliente,
            senha,
            nome_empresa, 
            cnpj, 
            cep, 
            endereco, 
            numero, 
            telefone, 
            email
        });
        
        await companyRepository.save(company);
        
        return res.status(201).json({  message: "Empresa cadastrada com sucesso!" });
    }

    async readAll(req: Request, res: Response) {
        const companies = await companyRepository.find({});

        return res.status(200).json(companies);
    }

    async readOne(req: Request, res: Response) {
        const { cnpj } = req.params;
        const search: number = parseInt(cnpj);
        
        const company = await companyRepository.find({
            where: {
                cnpj: search,
            },
        });

        return res.status(200).json(company);
    }

    async deleteOne(req: Request, res: Response) {
        const { cnpj } = req.params;
        const search: number = parseInt(cnpj);

        const deleteRegister = await companyRepository.find({
            where: {
                cnpj: search
            },
        });

        await companyRepository.remove(deleteRegister);

        return res.status(200).json({ message: "Empresa excluída com sucesso" });
    }

    async updateOne(req: Request, res: Response) {
        const { cnpj } = req.params;
        const search: number = parseInt(cnpj);
        const { nome_cliente = null, 
            senha = null, 
            nome_empresa = null, 
            cep = null, 
            endereco = null, 
            numero = null, 
            telefone = null, 
            email = null } = req.body;
        
        const updatedData = companyRepository.create({});

        if(nome_cliente) {
            updatedData.nome_cliente = nome_cliente;
        }

        if(senha) {
            updatedData.senha = senha;
        }

        if(nome_empresa) {
            updatedData.nome_empresa = nome_empresa;
        }

        if(cep) {
            updatedData.cep = cep;
        }

        if(endereco) {
            updatedData.endereco = endereco;
        }

        if(numero) {
            updatedData.numero = numero;
        }

        if(telefone) {
            updatedData.telefone = telefone;
        }

        if(email) {
            updatedData.email = email;
        }

        await companyRepository.update({ cnpj: search }, updatedData);

        return res.status(200).json({ message: "Cadastro atualizado com sucesso!" });
    }
}