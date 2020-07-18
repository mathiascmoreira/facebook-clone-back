'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('user_educations', [
      {
        user_id: 1,
        type: 1,
        school_name: 'Colégio Estadual Professor Pedro Gomes',
        course_name: null,
        description: null,
        currentlyStudying: false,
        graduated: true,
        date_start: '2010-01-18 03:16:13.735+00',
        date_end: '2012-12-12 03:16:13.735+00',
        visibility: 1, 
        created_at: '2020-06-25 03:16:13.735+00',
        updated_at: '2020-06-25 03:16:13.735+00'
      },
      {
        user_id: 1,
        type: 2,
        school_name: 'Universidade Federal de Goiás',
        course_name: 'Engenharia de Computação',
        description: null,
        currentlyStudying: true,
        graduated: true,
        date_start: '2013-03-23 03:16:13.735+00',
        date_end: '2017-12-20 03:16:13.735+00',
        visibility: 1, 
        created_at: '2020-06-25 03:16:13.735+00',
        updated_at: '2020-06-25 03:16:13.735+00'
      }
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('user_educations', null, {});
  }
};
