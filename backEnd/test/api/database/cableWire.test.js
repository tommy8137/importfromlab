/* eslint-env mocha */
const supertest = require('supertest')
const helper = require('../api-test-helper')
const DatabaseTestMod = require('./testMod/index.js')
const api = supertest(helper.testHost)
const Authorization = helper.genToken()
const PassCode = 200
const UNAuthorizedCode = 401
const testMod = new DatabaseTestMod(api, Authorization)
const BASE_ROUTE = 'database/cableWire/'
const apiTestList = [{
  'method': 'GET',
  'route': `${BASE_ROUTE}cableWireParameter`,
  'isAuth': true,
  'statusCode':PassCode,
  'isCheckDate': true,
  'propertyList':[
    ['id', 'string'],
    ['type', 'string'],
    ['items', 'array'],
  ],
  'listName':'cableWireParameter',
  'subList':{
    'name': 'items',
    'type': 'array',
    'propertyList': [
      ['id', 'string'],
      ['item', 'string'],
      ['last', 'number', 'can_be_null'],
      ['current', 'number', 'can_be_null'],
      ['next', 'number', 'can_be_null'],
      ['unit', 'string', 'can_be_null'],
    ],
    'notObjPropertyList':[],
  },
}, {
  'method': 'GET',
  'route': `${BASE_ROUTE}materialPrice`,
  'isAuth': true,
  'statusCode':PassCode,
  'isCheckDate': false,
  'propertyList':[
    ['id', 'string'],
    ['item', 'string'],
    ['last', 'number', 'can_be_null'],
    ['current', 'number', 'can_be_null'],
    ['next', 'number', 'can_be_null'],
    ['gauge', 'number'],
  ],
  'listName':'materialPrice',
  'subList':{
    'name': '',
    'type': '',
    'propertyList': [],
    'notObjPropertyList':[],
  },
}, {
  'method': 'GET',
  'route': `${BASE_ROUTE}connectorPrice`,
  'isAuth': true,
  'statusCode':PassCode,
  'isCheckDate': true,
  'propertyList':[
    ['id', 'string'],
    ['type', 'string'],
  ],
  'listName':'connectorPrice',
  'subList':{
    'name': 'items',
    'type': 'array',
    'propertyList': [
      ['id', 'string'],
      ['type', 'string'],
      ['vendorPN', 'string'],
      ['last', 'object'],
      ['current', 'object'],
      ['next', 'object'],
    ],
    'notObjPropertyList':['id', 'type', 'vendorPN'],
  },
}]
describe(BASE_ROUTE, () => {
  before(async () =>  {
    await helper.insertToken(Authorization)
  })
  after(async () =>  {
    await helper.deleteAuthToken(Authorization)
  })
  for(const apiTestInfo of apiTestList){
    switch (apiTestInfo.method) {
      case 'GET':
        describe(`#.API {GET} ${apiTestInfo.route}`, () => {
          it('should return a 200 response', (done) => {
            testMod.checkGetStatusCode(apiTestInfo, done)
          })
          it('body Check', (done) => {
            testMod.checkGetResBody(apiTestInfo, done)
          })
          it('should return a 401 response without Authorization', (done) => {
            let copyObj = Object.assign({}, apiTestInfo)
            copyObj.isAuth = false
            copyObj.statusCode = UNAuthorizedCode
            testMod.checkGetStatusCode(copyObj, done)
          })
        })
        break
      case 'PUT':
        break
      default:
        break
    }
  }
})
