const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::students-raiting.students-raiting', ({ strapi }) => ({
  async find(ctx) {
    const { locale = 'en' } = ctx.query;

    const entries = await strapi.entityService.findMany('api::students-raiting.students-raiting', {
      populate: {
        students: {
          populate: ['quarters'],
        },
      },
      locale,
    });

    const sorted = entries.map((entry) => ({
      ...entry,
      students: [...entry.students].sort((a, b) => b.average_mark - a.average_mark),
    }));

    return sorted;
  },
}));
