-- CreateTable
CREATE TABLE "PostcodeMedianPrice" (
    "id" SERIAL NOT NULL,
    "postcode" TEXT NOT NULL,
    "median" INTEGER NOT NULL,

    CONSTRAINT "PostcodeMedianPrice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PostcodeMedianPrice_postcode_key" ON "PostcodeMedianPrice"("postcode");
