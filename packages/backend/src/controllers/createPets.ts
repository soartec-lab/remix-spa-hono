import { createFactory } from 'hono/factory';
import { zValidator } from '../api.validator';
import { CreatePetsContext } from '../api.context';
import { createPetsBody } from '../api.zod';

const factory = createFactory();


export const createPetsHandlers = factory.createHandlers(
zValidator('json', createPetsBody),
async (c: CreatePetsContext) => {

  },
);
