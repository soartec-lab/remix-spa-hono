import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const db = prisma.pets;

export const Pet = {
	...prisma.pets,
	async all() {
		return db.findMany();
	},
	async find(id: number) {
		return db.findUnique({ where: { id } });
	},
};
