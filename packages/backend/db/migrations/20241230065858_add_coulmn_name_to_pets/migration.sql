/*
  Warnings:

  - Added the required column `mame` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pets` ADD COLUMN `name` VARCHAR(191) NOT NULL;
