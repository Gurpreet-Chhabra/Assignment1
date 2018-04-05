// import { HomeService } from '../home/home.service';
//
// //FAKE MOKING EXAMPLE
// class  MockService {
//     loginData: Object;
//     getData() {
//         return this.loginData;
//     }
// }
//
// //MOKING BY EXTENDING THE REAL SERVICE
// // class MockService extends HomeService{
// //
// // }
// describe('Mock test Service', () => {
//   let service: MockService;
//   let expectedData = {"age_range":{"min":21},"first_name":"Gurpreet","picture":{"data":{"height":50,"is_silhouette":false,"url":"https://scontent.xx.fbcdn.net/v/t1.0-1/c0.13.50.50/p50x50/12932591_1703322929892631_7535520873215882424_n.jpg?oh=17141ac0ed6fee9e4c326dcc4d8f5055&oe=5B15074B","width":50}},"last_name":"Chhabra","gender":"female","id":"2019639844927603"};
//
//   beforeEach(() => {
//       service = new MockService();
//
//    });
//   it('get data should return object', () => {
//       service.loginData = {"age_range":{"min":21},"first_name":"Gurpreet","picture":{"data":{"height":50,"is_silhouette":false,"url":"https://scontent.xx.fbcdn.net/v/t1.0-1/c0.13.50.50/p50x50/12932591_1703322929892631_7535520873215882424_n.jpg?oh=17141ac0ed6fee9e4c326dcc4d8f5055&oe=5B15074B","width":50}},"last_name":"Chhabra","gender":"female","id":"2019639844927603"};
//     expect(JSON.stringify(service.getData())).toBe(JSON.stringify(expectedData));
//   });
//
//   it('spy service method', () => {
//       spyOn(service , 'getData').and.returnValue(expectedData);
//       expect(JSON.stringify(service.getData())).toBe(JSON.stringify(expectedData));
//   });
// });
