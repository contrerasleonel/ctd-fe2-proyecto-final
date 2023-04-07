import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Esto configura un servidor de simulación de solicitudes con los controladores de solicitudes dados
export const server = setupServer(...handlers);