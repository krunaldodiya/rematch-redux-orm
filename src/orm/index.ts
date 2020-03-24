import { createReducer, ORM } from "redux-orm";

import { Book } from "./Book";
import { Author } from "./Author";

const orm = new ORM();

orm.register(Book);
orm.register(Author);

const ormReducer = createReducer(orm);

export { orm, ormReducer };
