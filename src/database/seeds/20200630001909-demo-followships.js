'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('followships', [
      {
        follower_user_id: 1,
        followed_user_id: 2,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        follower_user_id: 1,
        followed_user_id: 3,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        follower_user_id: 1,
        followed_user_id: 4,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        follower_user_id: 2,
        followed_user_id: 3,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        follower_user_id: 2,
        followed_user_id: 4,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        follower_user_id: 3,
        followed_user_id: 4,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        follower_user_id: 2,
        followed_user_id: 1,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        follower_user_id: 3,
        followed_user_id: 1,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        follower_user_id: 4,
        followed_user_id: 1,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        follower_user_id: 3,
        followed_user_id: 2,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        follower_user_id: 4,
        followed_user_id: 2,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
      {
        follower_user_id: 4,
        followed_user_id: 3,
        created_at: '2020-02-25 03:16:13.735+00',
        updated_at: '2020-02-25 03:16:13.735+00'
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('followships', null, {});
  }
};
