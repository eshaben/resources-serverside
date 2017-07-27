
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "resource"; ALTER SEQUENCE resource_id_seq RESTART WITH 1;')

  .then(function(){
    var resources = [{
      // id: 1,
      title: 'Introduction to SQL',
      type: 'Learn Article',
      link: 'https://learn.galvanize.com/content/gSchool/sql-curriculum/master/Introduction.md',
      description: 'Introduction to SQL and PostgreSQL that covers what SQL is, what PostegreSQL is, how to install and use PostgreSQL, and how data and information is managed',
      dateCreated: new Date(),
      quarter: 2
    }, {
      // id: 2,
      title: 'Entity Relationship Diagrams',
      type: 'Learn Article',
      link: 'https://learn.galvanize.com/content/gSchool/sql-curriculum/master/Entity%20Relationship%20Diagrams.md',
      description: 'Introduction to Entity Relation Diagrams(ERD) and SQL joins',
      dateCreated: new Date(),
      quarter: 2
    }, {
      // id: 3,
      title: 'SQL Zoo',
      type: 'Exercise',
      link: 'http://sqlzoo.net/',
      description: 'Learn SQL interactively in stages',
      dateCreated: new Date(),
      quarter: 2
    }, {
      // id: 4,
      title: 'Coolors',
      type: 'Tool',
      link: 'https://coolors.co/',
      description: 'Easy to use color scheme generator',
      dateCreated: new Date(),
      quarter: 1,
    }, {
      // id: 5,
      title: 'Wireframe.cc',
      type: 'Tool',
      link: 'https://wireframe.cc/',
      description: 'Tool for designing wireframes',
      dateCreated: new Date(),
      quarter: 1
    }, {
      // id: 6,
      title: 'Flexbox Froggy',
      type: 'Exercise',
      link: 'http://flexboxfroggy.com/',
      description: 'Learn flexbox by helping the frogs find their lilypads',
      dateCreated: new Date(),
      quarter: 1
    }];
    return knex('resource').insert(resources);
  });
};
