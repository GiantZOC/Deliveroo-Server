'use strict';

/**
 * Dishes.js controller
 *
 * @description: A set of functions called "actions" for managing `Dishes`.
 */

module.exports = {

  /**
   * Retrieve dishes records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.dishes.search(ctx.query);
    } else {
      return strapi.services.dishes.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a dishes record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.dishes.fetch(ctx.params);
  },

  /**
   * Count dishes records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.dishes.count(ctx.query, populate);
  },

  /**
   * Create a/an dishes record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.dishes.add(ctx.request.body);
  },

  /**
   * Update a/an dishes record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.dishes.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an dishes record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.dishes.remove(ctx.params);
  }
};
