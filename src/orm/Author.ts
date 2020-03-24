import Model, { attr } from "redux-orm";
import { v4 } from "uuid";

export class Author extends Model {
  static get modelName() {
    return "Author";
  }

  static get fields() {
    return {
      id: attr(),
      name: attr()
    };
  }

  static reducer(action: any, Author: any, session: any) {
    switch (action.type) {
      case "ADD_AUTHOR": {
        Author.create({ id: v4(), name: action.payload.name });
        break;
      }

      default: {
        break;
      }
    }
  }
}
