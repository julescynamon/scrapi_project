'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
    // nouvelle route get pour avoir un post avec ses commentaires
    async getPostWithComments(ctx) {
        // const {id} = ctx.params;
        // on récupère le post avec son id et on le populate avec les commentaires

        const post = await strapi.service('api::post.post').findOne(ctx.params.id, {
            populate: ['comments'],
        });
        return post.comments;
    }
}));
