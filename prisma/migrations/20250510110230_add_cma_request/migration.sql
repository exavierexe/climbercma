-- CreateTable
CREATE TABLE "CMARequest" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CMARequest_pkey" PRIMARY KEY ("id")
);
