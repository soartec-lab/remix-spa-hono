import { PrismaClient, type pets } from "@prisma/client";

const prisma = new PrismaClient();

export class Pet implements pets {
	id!: number;
	name!: string;

	constructor(pet: pets) {
		Object.assign(this, pet);
	}

	static db = prisma.pets;

	static async find(id: number) {
		const pet = await Pet.db.findUnique({ where: { id } });

		return pet ? new Pet(pet) : null;
	}

	getFullName(): string {
		return `${this.name} (ID: ${this.id})`;
	}
}
