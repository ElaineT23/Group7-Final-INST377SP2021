/* 
   don't mess with this file or remove environment entries in the object
   even for your group project, because it will stop your DB from connecting
   due to the many loops in the initializeDB file
   ~ Prof A.

       username: 'root',
    password: 'Veracrypt@12',
    database: 'Dining_Hall_Tracker',
    host: 'localhost',
    dialect: 'mysql'
*/

export default {
  development: {
    username: 'ubuntu',
    password: 'Veracrypt@12!',
    database: 'Dining_Hall_tracker',
    host: '174.129.198.86',
    dialect: 'mysql',
  },

  test: {
    username: 'student',
    password: 'INST377@UMD',
    database: 'Dining_Hall_Tracker',
    host: '174.129.198.86',
    dialect: 'mysql'
  },
  production: {
    username: 'student',
    password: 'INST377@UMD',
    database: 'Dining_Hall_Tracker',
    host: '174.129.198.86',
    dialect: 'mysql'
  }
};
