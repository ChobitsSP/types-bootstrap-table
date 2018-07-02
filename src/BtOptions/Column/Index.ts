import Base from "./Base";
import Filter from "./Filter";

export type ColumnOptions<T> = Base<T> & Filter<T>;
