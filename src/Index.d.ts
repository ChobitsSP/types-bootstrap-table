import { TableOptions } from "./BtOptions";

declare global {
  interface JQuery {
    /**
     * Init Table By TableOptions
     */
    bootstrapTable<T>(options: TableOptions<T>): JQuery;

    /**
     * Return the options object.
     */
    bootstrapTable<T>(method: "getOptions"): TableOptions<T>;

    /**
     * Load the data to table, the old rows will be removed.
     */
    bootstrapTable<T>(method: "load", data: T[]);

    /**
     * Get the loaded data of table at the moment that this method is called.
     * If you set the useCurrentPage to true the method will return the data in the current page.
     */
    bootstrapTable<T>(method: "getData"): T[];

    /**
     * Return selected rows, when no record selected, an empty array will return.
     */
    bootstrapTable<T>(method: "getSelections"): T[];
  }
}
