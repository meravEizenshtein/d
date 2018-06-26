import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const fields=[
      {
        "id": 2,
        "name": "field2",
        "type": "string",
        "length": 4,
        "isDomain": false,
        "basedOn": ""
      },
      {
        "id": 3,
        "name": "field3",
        "type": "string",
        "length": 4,
        "isDomain": true,
        "basedOn": ""
      },
      {
        "id": 4,
        "name": "field4",
        "type": "string",
        "length": 4,
        "isDomain": false,
        "basedOn": ""
      },
      {
        "id": 5,
        "name": "field5",
        "type": "string",
        "length": 4,
        "isDomain": true,
        "basedOn": ""
      },
      {
        "id": 6,
        "name": "field6",
        "type": "string",
        "length": 4,
        "isDomain": false,
        "basedOn": ""
      },
      {
        "id": 7,
        "name": "field7",
        "type": "string",
        "length": 4,
        "isDomain": true,
        "basedOn": ""
      }
    ]
    return {fields};
  }
  constructor() { }

}
