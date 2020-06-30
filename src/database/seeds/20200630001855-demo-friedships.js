'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('friendships', [
      {
        user1_id: 1,
        user2_id: 2,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        user1_id: 1,
        user2_id: 3,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        user1_id: 1,
        user2_id: 4,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        user1_id: 2,
        user2_id: 3,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        user1_id: 4,
        user2_id: 2,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        user1_id: 3,
        user2_id: 4,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('friendships', null, {});
  }
};
