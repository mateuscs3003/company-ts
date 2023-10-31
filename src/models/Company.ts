import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, Length } from "class-validator";

@Entity('companies')
export class Company {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "text" })
    nome_cliente: String

    @Column({ type: "text" })
    senha: String

    @Column({ type: "text" })
    nome_empresa: String

    @Column({ type: "bigint" })
    @Length(14)
    cnpj: number

    @Column({ type: "int" })
    @Length(8)
    cep: number

    @Column({ type: "text" })
    endereco: String

    @Column({ type: "int" })
    numero: number

    @Column({ type: "int" })
    telefone: number

    @Column({ type: "text" })
    @IsEmail()
    email: String
}