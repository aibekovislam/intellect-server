/**
 * employee controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::employee.employee', ({ strapi }) => ({
    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        sort: ['order:asc'],
      };
  
      const { data, meta } = await super.find(ctx);
      return { data, meta };
    },
  }));
  