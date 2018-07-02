import { TableOptions } from "./BtOptions";

declare global {
  interface JQuery {
    bootstrapTable<T>(options: TableOptions<T>): JQuery;
    bootstrapTable(method: string, ...parameters: any[]): JQuery | any;
  }
}
