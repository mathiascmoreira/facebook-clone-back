'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Mathias',
        last_name: 'Moreira',
        user_name: 'mathias.moreira',
        email: 'mathiascmoreira@gmail.com',
        password_hash: '$2a$08$9sw2aAxHH3itxpRsvGe6VulZJza5oBvmkfmmlNj5MQ3aT3q9U2Z6O',
        birthday: '1985-01-30 03:16:13.735+00',
        joined_at: '2010-06-11 03:16:13.735+00',
        created_at: '2010-06-11 03:16:13.735+00',
        updated_at: '2010-06-11 03:16:13.735+00'
      },
      {
        id: 2,
        name: 'João',
        last_name: 'da Silva',
        user_name: 'joao.da.silva',
        email: 'joaodasilva@gmail.com',
        password_hash: '$2a$08$9sw2aAxHH3itxpRsvGe6VulZJza5oBvmkfmmlNj5MQ3aT3q9U2Z6O',
        birthday: '1992-06-11 03:16:13.735+00',
        joined_at: '2012-02-25 03:16:13.735+00',
        created_at: '2012-02-25 03:16:13.735+00',
        updated_at: '2012-02-25 03:16:13.735+00'
      },
      {
        id: 3,
        name: 'Maria',
        last_name: 'Ferreira',
        user_name: 'maria.ferreira',
        email: 'mariaferreira@gmail.com',
        password_hash: '$2a$08$9sw2aAxHH3itxpRsvGe6VulZJza5oBvmkfmmlNj5MQ3aT3q9U2Z6O',
        birthday: '1975-03-16 03:16:13.735+00',
        joined_at: '2011-10-11 03:16:13.735+00',
        created_at: '2011-10-11 03:16:13.735+00',
        updated_at: '2011-10-11 03:16:13.735+00'
      },
      {
        id: 4,
        name: 'Josenilda',
        last_name: 'Pereira',
        user_name: 'josenilda.pereira',
        email: 'josenildapereira@gmail.com',
        password_hash: '$2a$08$9sw2aAxHH3itxpRsvGe6VulZJza5oBvmkfmmlNj5MQ3aT3q9U2Z6O',
        birthday: '1998-11-02 03:16:13.735+00',
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
