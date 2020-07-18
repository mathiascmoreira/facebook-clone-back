'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('user_works', [
      {
        user_id: 1,
        position: 'Programador',
        company: 'Invent Software',
        location: 'Goiânia',
        description: '',
        currently_working: true,
        date_start: '2015-11-18 03:16:13.735+00',
        date_end: null,
        visibility: 1,
        created_at: '2010-01-18 03:16:13.735+00',
        updated_at: '2010-01-18 03:16:13.735+00',
      },
      {
        user_id: 1,
        position: 'Estagiário',
        company: 'Xavate Sistemas',
        location: 'Goiânia',
        description: '',
        currently_working: false,
        date_start: '2014-03-18 03:16:13.735+00',
        date_end: '2015-03-18 03:16:13.735+00',
        visibility: 1,
        created_at: '2010-01-18 03:16:13.735+00',
        updated_at: '2010-01-18 03:16:13.735+00',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('user_works', null, {});
  }
};
