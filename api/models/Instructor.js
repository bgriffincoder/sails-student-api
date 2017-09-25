/**
 * Instructor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    instructor_id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: 'string'
    },
    last_name: {
      type: 'string'
    },
    major: {
      model: "major",
      columnName: "major_id",
      type: 'integer'
    },
    years_of_expierience: {
      type: 'integer'
    },
    tenured: {
      type: 'integer'
    }
  },
  autoPK: false
};
