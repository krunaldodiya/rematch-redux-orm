import Model, { attr, fk } from "redux-orm";
import { v4 } from "uuid";

export class Book extends Model {
  static get modelName() {
    return "Book";
  }

  static get fields() {
    return {
      id: attr(),
      name: attr(),
      author_id: fk({
        to: "Author",
        as: "author",
        relatedName: "books"
      })
    };
  }

  static reducer(action: any, Book: any, session: any) {
    switch (action.type) {
      case "ADD_BOOK": {
        Book.create({
          id: v4(),
          name: action.payload.name,
          author_id: action.payload.author_id
        });
        break;
      }

      default: {
        break;
      }
    }
  }
}
