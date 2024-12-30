import { createFactory } from 'hono/factory';
import { zValidator } from '../api.validator';
import { ListPetsContext } from '../api.context';
import { listPetsQueryParams,
listPetsResponse } from '../api.zod';

const factory = createFactory();


export const listPetsHandlers = factory.createHandlers(
zValidator('query', listPetsQueryParams),
zValidator('response', listPetsResponse),
async (c: ListPetsContext) => {

  },
);
