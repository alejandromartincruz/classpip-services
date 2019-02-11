'use strict';

module.exports = function (app, cb) {

  app.models.Badge.create([{
    id: 100000,
    name: 'Misterwong',
    image: 'https://cdn2.iconfinder.com/data/icons/web2/Icons/Misterwong_128x128.png',
    value: '10',
    schoolId: 1,
    teacherId: 1000
  }, {
    id: 100001,
    name: 'Favorite',
    image: 'https://cdn2.iconfinder.com/data/icons/web2/Icons/Favorite_128x128.png',
    value: '5',
    schoolId: 1,
    teacherId: 1000
  }, {
    id: 100002,
    name: 'Mr Collection',
    image: 'http://hangingtogether.org/wp-content/uploads/2015/04/Managing-Metadata-for-Image-Collections-blog-graphic.png',
    value: '20',
    schoolId: 1,
    teacherId: 1000
  }, {
    id: 100003,
    name: 'Boss',
    image: 'https://i.pinimg.com/originals/7d/f8/62/7df8629260663b053256b0ad5c2a17a9.png',
    value: '25',
    schoolId: 1,
    teacherId: 1000
  }], function (err) {
    if (err) throw err;

    app.models.BadgeRelation.create([{
      id: 1,
      value: '1',
      badgeId: 100000,
      groupId: 1,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 2,
      value: '1',
      badgeId: 100002,
      groupId: 1,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 3,
      value: '1',
      badgeId: 100003,
      groupId: 1,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 4,
      value: '1',
      badgeId: 100001,
      groupId: 1,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 5,
      value: '1',
      badgeId: 100001,
      groupId: 1,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 6,
      value: '1',
      badgeId: 100000,
      groupId: 1,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 7,
      value: '1',
      badgeId: 100000,
      groupId: 1,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 8,
      value: '1',
      badgeId: 100000,
      groupId: 2,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 9,
      value: '1',
      badgeId: 100000,
      groupId: 1,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 10,
      value: '1',
      badgeId: 100000,
      groupId: 1,
      studentId: 10002,
      schoolId: 1
    }, {
      id: 11,
      value: '1',
      badgeId: 100000,
      groupId: 1,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 12,
      value: '1',
      badgeId: 100000,
      groupId: 1,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 13,
      value: '1',
      badgeId: 100001,
      groupId: 1,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 14,
      value: '1',
      badgeId: 100001,
      groupId: 1,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 15,
      value: '1',
      badgeId: 100000,
      groupId: 1,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 16,
      value: '1',
      badgeId: 100000,
      groupId: 1,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 17,
      value: '1',
      badgeId: 100001,
      groupId: 1,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 18,
      value: '1',
      badgeId: 100000,
      groupId: 2,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 19,
      value: '1',
      badgeId: 100000,
      groupId: 2,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 20,
      value: '1',
      badgeId: 100000,
      groupId: 2,
      studentId: 10008,
      schoolId: 1
    }, {
      id: 21,
      value: '1',
      badgeId: 100000,
      groupId: 2,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 22,
      value: '1',
      badgeId: 100000,
      groupId: 2,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 23,
      value: '1',
      badgeId: 100001,
      groupId: 2,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 24,
      value: '1',
      badgeId: 100001,
      groupId: 3,
      studentId: 10008,
      schoolId: 1
    }, {
      id: 25,
      value: '1',
      badgeId: 100000,
      groupId: 3,
      studentId: 10008,
      schoolId: 1
    }, {
      id: 26,
      value: '1',
      badgeId: 100000,
      groupId: 3,
      studentId: 10008,
      schoolId: 1
    }, {
      id: 27,
      value: '1',
      badgeId: 100001,
      groupId: 3,
      studentId: 10004,
      schoolId: 1
    }, {
      id: 28,
      value: '1',
      badgeId: 100000,
      groupId: 3,
      studentId: 10008,
      schoolId: 1
    }, {
      id: 29,
      value: '1',
      badgeId: 100000,
      groupId: 3,
      studentId: 10008,
      schoolId: 1
    }, {
      id: 30,
      value: '1',
      badgeId: 100000,
      groupId: 3,
      studentId: 10004,
      schoolId: 1
    }, {
      id: 31,
      value: '1',
      badgeId: 100000,
      groupId: 3,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 32,
      value: '1',
      badgeId: 100000,
      groupId: 3,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 33,
      value: '1',
      badgeId: 100001,
      groupId: 3,
      studentId: 10000,
      schoolId: 1
    }, {
      id: 34,
      value: '1',
      badgeId: 100001,
      groupId: 2,
      studentId: 10008,
      schoolId: 1
    }, {
      id: 35,
      value: '1',
      badgeId: 100000,
      groupId: 2,
      studentId: 10008,
      schoolId: 1
    }, {
      id: 36,
      value: '1',
      badgeId: 100000,
      groupId: 2,
      studentId: 10008,
      schoolId: 1
    }, {
      id: 37,
      value: '1',
      badgeId: 100001,
      groupId: 3,
      studentId: 10004,
      schoolId: 1
    }, {
      id: 38,
      value: '1',
      badgeId: 100001,
      groupId: 1,
      studentId: 10008,
      schoolId: 1
    }, {
      id: 39,
      value: '1',
      badgeId: 100001,
      groupId: 1,
      studentId: 10008,
      schoolId: 1
    }], function (err) {

      process.nextTick(cb);
    });
  });
};
