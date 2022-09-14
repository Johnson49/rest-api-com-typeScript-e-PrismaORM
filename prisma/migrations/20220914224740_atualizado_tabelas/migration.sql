/*
  Warnings:

  - Added the required column `atualizado` to the `Publicacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Publicacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "data_publicacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado" DATETIME NOT NULL,
    "autorId" TEXT NOT NULL,
    CONSTRAINT "Publicacao_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Publicacao" ("autorId", "conteudo", "data_publicacao", "id", "titulo") SELECT "autorId", "conteudo", "data_publicacao", "id", "titulo" FROM "Publicacao";
DROP TABLE "Publicacao";
ALTER TABLE "new_Publicacao" RENAME TO "Publicacao";
CREATE TABLE "new_Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "atualizado" DATETIME NOT NULL,
    "data_publicacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Usuario" ("email", "id", "nome") SELECT "email", "id", "nome" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
