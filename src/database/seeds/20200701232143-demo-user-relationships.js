'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('user_relationships', [
      {
        user_id: 1,
        related_user_id: null,
        type: 1,
        visibility: 1,
        created_at: '2010-01-18 03:16:13.735+00',
        updated_at: '2010-01-18 03:16:13.735+00',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('user_relationships', null, {});
  }
};
