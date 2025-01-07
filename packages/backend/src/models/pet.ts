import { PrismaClient } from "@prisma/client";
import type { Pet as PetModel } from "../handlers/schemas";

const prisma = new PrismaClient().$extends({
	model: {
		pets: {
			async FindByName(name: string) {
				return await prisma.pets.findFirst({ where: { name } });
			},
		},
	},
	result: {
		pets: {
			displayName: {
				needs: { id: true, name: true },
				compute(pet: PetModel) {
					return `${pet.name} <${pet.id}>`;
				},
			},
		},
	},
});

export const Pet = prisma.pets;
