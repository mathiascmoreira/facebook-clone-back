'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('user_locations', [
      {
        user_id: 1,
        from_location: 'Goiânia',
        current_location: 'Brasília',
        from_location_visibility: 1,
        current_location_visibility: 1,
        created_at: '2020-06-25 03:16:13.735+00',
        updated_at: '2020-06-25 03:16:13.735+00'
      },
      {
        user_id: 2,
        from_location: 'Uberlândia',
        current_location: 'Belo Horizonte',
        from_location_visibility: 1,
        current_location_visibility: 1,
        created_at: '2020-06-25 03:16:13.735+00',
        updated_at: '2020-06-25 03:16:13.735+00'
      },
      {
        user_id: 3,
        from_location: 'Uberaba',
        current_location: 'São Paulo',
        from_location_visibility: 1,
        current_location_visibility: 1,
        created_at: '2020-06-25 03:16:13.735+00',
        updated_at: '2020-06-25 03:16:13.735+00'
      },
      {
        user_id: 4,
        from_location: 'Padre Bernardo',
        current_location: 'Anápolis',
        from_location_visibility: 1,
        current_location_visibility: 1,
        created_at: '2020-06-25 03:16:13.735+00',
        updated_at: '2020-06-25 03:16:13.735+00'
      },
     
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('user_locations', null, {});
  }
};
