/**
 * Student_Class.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  
    attributes: {
        student_class_id: {
          type: 'integer',
          primaryKey: true,
          autoIncrement: true
        },
        student: {
          model: "student",
          columnName: "student_id",
          type: 'integer'
        },
        class: {
          model: "class",
          columnName: "class_id",
          type: 'integer'
        }
      },
      autoPK: false
  };