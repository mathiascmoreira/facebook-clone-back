'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('friendships', [
      {
        user_id: 1,
        friend_id: 2,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        user_id: 1,
        friend_id: 3,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        user_id: 1,
        friend_id: 4,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        user_id: 2,
        friend_id: 1,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        user_id: 2,
        friend_id: 3,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        user_id: 2,
        friend_id: 4,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        user_id: 3,
        friend_id: 1,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        user_id: 3,
        friend_id: 2,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        user_id: 3,
        friend_id: 4,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        user_id: 4,
        friend_id: 1,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        user_id: 4,
        friend_id: 2,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        user_id: 4,
        friend_id: 3,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('friendships', null, {});
  }
};
