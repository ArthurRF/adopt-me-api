-- CreateEnum
CREATE TYPE "PetSexType" AS ENUM ('M', 'F');

-- CreateTable
CREATE TABLE "pets" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "sex" "PetSexType" NOT NULL,
    "age" INTEGER,
    "weight" DOUBLE PRECISION,
    "views" INTEGER NOT NULL DEFAULT 0,
    "adopted" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);
