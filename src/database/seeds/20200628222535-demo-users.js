'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Brendan',
        last_name: 'Owen',
        user_name: 'brendan.owen',
        email: 'brendanowen@gmail.com',
        password_hash: '$2a$08$9sw2aAxHH3itxpRsvGe6VulZJza5oBvmkfmmlNj5MQ3aT3q9U2Z6O',
        birthday: '1985-01-30 03:16:13.735+00',
        cover_photo_id: 7,
        picture_id: 1,
        bio: '',
        joined_at: '2010-06-11 03:16:13.735+00',
        created_at: '2010-06-11 03:16:13.735+00',
        updated_at: '2010-06-11 03:16:13.735+00'
      },
      {
        id: 2,
        name: 'Mark',
        last_name: 'Sandoval',
        user_name: 'mark.sandoval',
        email: 'marksandoval@gmail.com',
        password_hash: '$2a$08$9sw2aAxHH3itxpRsvGe6VulZJza5oBvmkfmmlNj5MQ3aT3q9U2Z6O',
        birthday: '1992-06-11 03:16:13.735+00',
        cover_photo_id: 5,
        picture_id: 4,
        bio: '',
        joined_at: '2012-02-25 03:16:13.735+00',
        created_at: '2012-02-25 03:16:13.735+00',
        updated_at: '2012-02-25 03:16:13.735+00'
      },
      {
        id: 3,
        name: 'Anissa',
        last_name: 'Lion',
        user_name: 'anissa.lion',
        email: 'anissalion@gmail.com',
        password_hash: '$2a$08$9sw2aAxHH3itxpRsvGe6VulZJza5oBvmkfmmlNj5MQ3aT3q9U2Z6O',
        birthday: '1975-03-16 03:16:13.735+00',
        cover_photo_id: 6,
        picture_id: 3,
        bio: '',
        joined_at: '2011-10-11 03:16:13.735+00',
        created_at: '2011-10-11 03:16:13.735+00',
        updated_at: '2011-10-11 03:16:13.735+00'
      },
      {
        id: 4,
        name: 'Laura',
        last_name: 'Kate',
        user_name: 'laura.kate',
        email: 'laurakate@gmail.com',
        password_hash: '$2a$08$9sw2aAxHH3itxpRsvGe6VulZJza5oBvmkfmmlNj5MQ3aT3q9U2Z6O',
        birthday: '1994-11-02 03:16:13.735+00',
        cover_photo_id: 8,
        picture_id: 2,
        bio: '',
        joined_at: '2016-04-09 03:16:13.735+00',
        created_at: '2016-04-09 03:16:13.735+00',
        updated_at: '2016-04-09 03:16:13.735+00'
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
