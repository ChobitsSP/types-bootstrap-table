/**
 * https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/export#options
 */
export default interface Options<T> {
  /**
   * set true to show export button.
   */
  showExport?: boolean;

  /**
   * export data type, support: 'basic', 'all', 'selected'.
   */
  exportDataType?: "basic" | "all" | "selected";

  /**
   * export types, support types: 'json', 'xml', 'png', 'csv', 'txt', 'sql', 'doc', 'excel', 'xlsx', 'pdf'.
   */
  exportTypes?: ExportType[];

  /**
   * export options of tableExport.jquery.plugin
   */
  exportOptions?: any;
}

type ExportType =
  | "json"
  | "xml"
  | "png"
  | "csv"
  | "txt"
  | "sql"
  | "doc"
  | "excel"
  | "xlsx"
  | "pdf";
