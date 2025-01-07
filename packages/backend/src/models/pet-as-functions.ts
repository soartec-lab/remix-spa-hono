import { PrismaClient } from "@prisma/client";
import type { Pet as PetModel } from "../handlers/schemas";

const prisma = new PrismaClient();
const db = prisma.pets;

export const Pet = {
	...db,
	async all() {
		return db.findMany();
	},
	async find(id: number) {
		return db.findUnique({ where: { id } });
	},
};

export function getFullName(pet: Pick<PetModel, "id" | "name">): string {
	return `${pet.id} (ID: ${pet.id})`;
}
