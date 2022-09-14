import { PrismaClient, Usuario } from "@prisma/client";

export const prisma = new PrismaClient();

class UsuarioRepository {
  async criar_novo_usuario(nome: string, email: string): Promise<Usuario> {
    const usuario = await prisma.usuario.create({
      data: {
        nome: nome,
        email: email,
      },
    });

    return usuario;
  }

  async ler_todos_os_usuarios() {
    const usuarios = await prisma.usuario.findMany();
    return usuarios;
  }

  async ler_usuario_por_id(id: string) {
    const usuario = await prisma.usuario.findUnique({
      where: { id: id },
      //   select: {
      //     email: true
      //   }
    });
    return usuario;
  }

  async deletar_um_usuario(id: string) {
    const usuario = await prisma.usuario.delete({
      where: { id: id },
    });
    return usuario;
  }

  async atualizar_usuario(id: string, nome: string, email: string) {
    const usuario = await prisma.usuario.update({
      where: { id: id },
      data: {
        nome: nome,
        email: email,
      },
    });
    return usuario;
  }
}

export default new UsuarioRepository();
