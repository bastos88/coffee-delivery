/*
  Warnings:

  - You are about to drop the column `uf` on the `Order` table. All the data in the column will be lost.
  - Changed the type of `paymentMethod` on the `Order` table.
*/

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM (
  'MB_WAY',
  'MULTIBANCO',
  'CARD',
  'CASH_ON_DELIVERY'
);

-- Remove campo que não se aplica ao endereço em Portugal
ALTER TABLE "Order" DROP COLUMN "uf";

-- Converte a coluna existente para o enum PostgreSQL
ALTER TABLE "Order"
  ALTER COLUMN "paymentMethod" DROP DEFAULT,
  ALTER COLUMN "paymentMethod" TYPE "PaymentMethod"
  USING ("paymentMethod"::text::"PaymentMethod");