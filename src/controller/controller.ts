import { Request, Response } from "express";
import usuarioRepository, { prisma } from "../repositories/usuario.repository";


export function raiz(req: Request, res: Response) {
  return res.json({ msg: "BEm-vindo" });
}

export function criar_novo_usuario(req: Request, res: Response) {
  const { nome, email } = req.body;

  try {
    const usuario = usuarioRepository.criar_novo_usuario(nome, email);
    usuario
      .then(async (dados) => {
        await prisma.$disconnect();
        return res.json(dados);
      })
      .catch(async (e) => {
        await prisma.$disconnect();
        throw new Error(
          "Erro ao tentar cadastrar novo usuario no banco de dados."
        );
      });
  } catch (error) {
    return res.json(error);
  }
}

export function ler_todos_usuario(req: Request, res: Response) {
  try {
    const usuarios = usuarioRepository.ler_todos_os_usuarios();
    usuarios
      .then(async (dados) => {
        await prisma.$disconnect();
        return res.json(dados);
      })
      .catch(async (e) => {
        await prisma.$disconnect();
        throw new Error(
          "Erro ao tentar pegar todos os usuarios no banco de dados."
        );
      });
   
  } catch (error) {
    return res.json({ error });
  }
}


export function apagar_usuario(req: Request, res: Response){
    const {id}= req.params
    try {
        const usuario = usuarioRepository.deletar_um_usuario(id)
        usuario
          .then(async (dados) => {
            await prisma.$disconnect();
            return res.json(dados);
          })
          .catch(async (e) => {
            await prisma.$disconnect();
            throw new Error(
              `Erro ao tentar excluir usuario de id: ${id} .`
            );
          });
       
      } catch (error) {
        return res.json({ error });
      }
    // 
}

export function atualizar_usuario(req: Request, res: Response){
    const {id}= req.params
    const {nome, email} = req.body
    try {
        const usuario = usuarioRepository.atualizar_usuario(id, nome, email)
        usuario
          .then(async (dados) => {
            await prisma.$disconnect();
            return res.json(dados);
          })
          .catch(async (e) => {
            await prisma.$disconnect();
            throw new Error(
                `Erro ao tentar atualizar dados de usuario de id: ${id} .`
            );
          });
       
      } catch (error) {
        return res.json({ error });
      }
}