module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('files', [
      {
        id: 1,
        name: 'profilePicture.png',
        path: '7c3cc76a494f1d943386ec415914ba4a.png',
        created_at: '2010-01-18 03:16:13.735+00',
        updated_at: '2010-01-18 03:16:13.735+00',
      },
      {
        id: 2,
        name: 'profilePicture.png',
        path: '288e477a426931df64fc0b115447f2a3.png',
        created_at: '2010-01-18 03:16:13.735+00',
        updated_at: '2010-01-18 03:16:13.735+00',
      },
      {
        id: 3,
        name: 'profilePicture.png',
        path: 'b5b20f92cfb80a543566c2f47b37a6f1.png',
        created_at: '2010-01-18 03:16:13.735+00',
        updated_at: '2010-01-18 03:16:13.735+00',
      },
      {
        id: 4,
        name: 'profilePicture.png',
        path: 'c572f74339fcf7efa6626765b8ac5244.png',
        created_at: '2010-01-18 03:16:13.735+00',
        updated_at: '2010-01-18 03:16:13.735+00',
      },
      {
        id: 5,
        name: 'coverPhoto.png',
        path: '6a285f70722f4fd0ae422887814ec0b3.png',
        created_at: '2010-01-18 03:16:13.735+00',
        updated_at: '2010-01-18 03:16:13.735+00',
      },
      {
        id: 6,
        name: 'coverPhoto.png',
        path: '8f751cba84e6cce6c34c0a48a777a3a5.png',
        created_at: '2010-01-18 03:16:13.735+00',
        updated_at: '2010-01-18 03:16:13.735+00',
      },
      {
        id: 7,
        name: 'coverPhoto.png',
        path: '51ca85776898464f2041b1f361fada44.png',
        created_at: '2010-01-18 03:16:13.735+00',
        updated_at: '2010-01-18 03:16:13.735+00',
      },
      {
        id: 8,
        name: 'coverPhoto.png',
        path: 'c272579d5136d69ecba1b51e7c928725.png',
        created_at: '2010-01-18 03:16:13.735+00',
        updated_at: '2010-01-18 03:16:13.735+00',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('files', null, {});
  }
};

