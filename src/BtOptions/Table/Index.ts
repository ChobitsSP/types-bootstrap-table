import Base from "./Base";
import Events from "./Events";
import Export from "./Export";
import Filter from "./Filter";

export type TableOptions<T> = Base<T> & Events<T> & Export<T> & Filter<T>;
