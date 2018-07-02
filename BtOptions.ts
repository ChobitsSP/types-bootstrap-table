import { Event } from "jquery";

/**
 * The table options are defined in jQuery.fn.bootstrapTable.defaults.
 */
export interface TableOptions<T> {
  /**
   * The class name of table.
   * By default, the table is bordered,
   * you can add 'table-no-bordered' to remove table-bordered style.
   */
  classes?: string;

  /**
   * The class name of the td elements which are sorted.
   */
  sortClass?: string;

  /**
   * The height of table.
   */
  height?: number;

  /**
   * Defines the default undefined text.
   */
  undefinedText?: string;

  /**
   * True to stripe the rows.
   */
  striped?: boolean;

  /**
   * Defines which column will be sorted.
   */
  sortName?: string;

  /**
   * Defines the column sort order.
   */
  sortOrder?: "asc" | "desc";

  /**
   * True to get a stable sorting. We will add _position property to the row.
   */
  sortStable?: boolean;

  /**
   * Set true remember the order for each column.
   */
  rememberOrder?: boolean;

  /**
   * Defines icon set name ('glyphicon' or 'fa' for FontAwesome).
   * By default 'glyphicon' is used.
   */
  iconsPrefix?: "glyphicon" | "fa";

  /**
   * Defines icon size
   */
  iconSize?: "xs" | "sm" | "lg";

  /**
   * Defines the Bootstrap class (added after 'btn-') of table buttons:
   * EX: 'primary', 'danger', 'warning'...
   */
  buttonsClass?:
    | "default"
    | "primary"
    | "danger"
    | "warning"
    | "success"
    | "info"
    | "link";

  /**
   * Defines icons used in the toolbar, pagination, and details view.
   */
  icons?: any;

  /**
   * The table columns config object.
   */
  columns?: ColumnOptions<T>[];

  /**
   * The data to be loaded.
   */
  data?: T[];

  /**
   * Key in incoming json containing rows data list.
   */
  dataField?: string;

  /**
   * Key in incoming json containing "total" data.
   */
  totalField?: string;

  /**
   *
   */
  ajax?: (params: AjaxParams<T>) => Promise<void>;

  /**
   * The method type to request remote data.
   */
  method?: string;

  /**
   * A URL to request data from remote site.
   */
  url?: string;

  /**
   * False to disable caching of AJAX requests.
   */
  cache?: boolean;

  /**
   * The contentType of request remote data.
   */
  contentType?: string;

  /**
   * The type of data that you are expecting back from the server.
   */
  dataType?: string;

  /**
   * Additional options for submit ajax request.
   * List of values: http://api.jquery.com/jQuery.ajax.
   */
  ajaxOptions?: object;

  /**
   * When requesting remote data, you can send additional parameters by modifying queryParams.
   * Return false to stop request.
   */
  queryParams?: (params) => any;

  queryParamsType?: string;

  responseHandler?: (res) => any;

  /**
   * True to show a pagination toolbar on table bottom.
   */
  pagination?: boolean;

  /**
   * True to enable pagination continuous loop mode.
   */
  paginationLoop?: boolean;

  /**
   * True to show only the quantity of the data that is showing in the table.
   * It needs the pagination table options is set to true.
   */
  onlyInfoPagination?: boolean;

  /**
   * Defines the side pagination of table, can only be 'client' or 'server'.
   * Using 'server' side requires either setting the 'url' or 'ajax' option.
   */
  sidePagination?: "client" | "server";

  /**
   * When set pagination property, initialize the page number.
   */
  pageNumber?: number;

  /**
   * When set pagination property, initialize the page size.
   */
  pageSize?: number;

  /**
   * When set pagination property, initialize the page size selecting list.
   * If you include the 'All' or 'Unlimited' option,
   * all the records will be shown in your table.
   */
  pageList?: number[];

  /**
   * The name of radio or checkbox input.
   * default is 'btSelectItem'.
   */
  selectItemName?: string;

  /**
   * True to display pagination or card view smartly.
   */
  smartDisplay?: boolean;

  /**
   * Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.
   */
  escape?: boolean;

  /**
   * Enable the search input.
   */
  search?: boolean;

  /**
   * The search method will be executed until the Enter key is pressed.
   */
  searchOnEnterKey?: boolean;

  /**
   * Enable the strict search.
   */
  strictSearch?: boolean;

  /**
   * When set search property, initialize the search text.
   */
  searchText?: string;

  /**
   * Set timeout for search fire.
   */
  searchTimeOut?: number;

  /**
   *
   */
  trimOnSearch?: boolean;

  /**
   *
   */
  showHeader?: boolean;

  /**
   *
   */
  showFooter?: boolean;

  /**
   *
   */
  showColumns?: boolean;

  /**
   *
   */
  showRefresh?: boolean;

  /**
   *
   */
  showToggle?: boolean;

  /**
   *
   */
  showPaginationSwitch?: boolean;

  /**
   *
   */
  showFullscreen?: boolean;

  /**
   * The minimum number of columns to hide from the columns drop down list.
   */
  minimumCountColumns?: number;

  idField?: string;
  uniqueId?: string;
  cardView?: boolean;
  detailView?: boolean;
  detailFormatter?: Function;
  detailFilter?: Function;
  searchAlign?: string;
  buttonsAlign?: string;
  toolbarAlign?: string;
  paginationVAlign?: string;
  paginationHAlign?: string;
  paginationDetailHAlign?: string;
  paginationPreText?: string;
  paginationNextText?: string;

  /**
   * True to select checkbox or radio when the column is clicked.
   */
  clickToSelect?: boolean;
  ignoreClickToSelectOn?: Function;

  /**
   * True to allow checkbox selecting only one row.
   */
  singleSelect?: boolean;
  // toolbar?: string | HTMLElement;
  // buttonsToolbar?: string | HTMLElement;
  checkboxHeader?: boolean;
  maintainSelected?: boolean;
  sortable?: boolean;
  silentSort?: boolean;

  /**
   * The row style formatter function
   */
  rowStyle?: (row: T, index: number) => ClassStyle;
  rowAttributes?: Function;
  customSearch?: Function;
  customSort?: Function;
  locale?: string;
  footerStyle?: Function;

  /**
   * https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/filter-control
   */
  filterControl?: boolean;

  filterShowClear?: boolean;

  /**
   * https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/export
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

/**
 * The column options is defined in jQuery.fn.bootstrapTable.columnDefaults.
 */
export interface ColumnOptions<T> {
  /**
   * True to show a radio. The radio column has fixed width.
   */
  radio?: boolean;

  /**
   * True to show a checkbox. The checkbox column has fixed width.
   */
  checkbox?: boolean;

  /**
   * The column field name.
   */
  field?: string;

  /**
   * The column title text.
   */
  title?: string;

  /**
   * The column title tooltip text. This option also support the title HTML attribute.
   */
  titleTooltip?: string;

  /**
   * The column class name.
   */
  ["class"]?: string;

  /**
   * Indicate how many rows a cell should take up.
   */
  rowspan?: number;

  /**
   * Indicate how many columns a cell should take up.
   */
  colspan?: number;

  /**
   * Indicate how to align the column data. 'left', 'right', 'center' can be used.
   */
  align?: "left" | "right" | "center";

  /**
   * Indicate how to align the table header. 'left', 'right', 'center' can be used.
   */
  halign?: "left" | "right" | "center";

  /**
   * Indicate how to align the table footer. 'left', 'right', 'center' can be used.
   */
  falign?: "left" | "right" | "center";

  /**
   * Indicate how to align the cell data. 'top', 'middle', 'bottom' can be used.
   */
  valign?: "top" | "middle" | "bottom";

  /**
   * The width of column. If not defined, the width will auto expand to fit its contents.
   * Though if the table is left responsive and sized too small this 'width' might be ignored (use min/max-width via class or such then). Also you can add '%' to your number and the bootstrapTable will use the percentage unit, otherwise, leave as number (or add 'px') to make it use pixels.
   */
  width?: number | string;

  /**
   * True to allow the column can be sorted.
   */
  sortable?: boolean;

  /**
   * The default sort order, can only be 'asc' or 'desc'.
   */
  order?: "asc" | "desc";

  /**
   * False to hide the columns item.
   */
  visible?: boolean;

  /**
   * False to hide the columns item in card view state.
   */
  cardVisible?: boolean;

  /**
   * False to disable the switchable of columns item.
   */
  switchable?: boolean;

  /**
   * True to select checkbox or radio when the column is clicked.
   */
  clickToSelect?: boolean;

  /**
   * The context (this) is the column Object.
   * The cell formatter function, take three parameters
   */
  formatter?: (value, row: T, index: number, field: string) => any;

  /**
   * The context (this) is the column Object.
   * the function should return a string with the text to show in the footer cell.
   * data: Array of all the data rows.
   */
  footerFormatter?: (data: T[]) => string;

  /**
   * The cell events listener when you use formatter function
   * event: the jQuery event.
   * value: the field value.
   */
  events?: { [id: string]: (e: Event, value, row: T, index: number) => void };

  /**
   * The custom field sort function that used to do local sorting
   */
  sorter?: (val1, val2, row1: T, row2: T) => void;

  /**
   * Provide a customizable sort-name, not the default sort-name in the header,
   * or the field name of the column.
   * For example, a column might display the value of fieldName of "html"
   * such as "<b><span style="color:red">abc</span></b>",
   * but a fieldName to sort is "content" with the value of "abc".
   */
  sortName?: string;

  /**
   * The cell style formatter function
   */
  cellStyle?: (value, row: T, index: number, field: string) => ClassStyle;

  /**
   * True to search data for this column.
   */
  searchable?: boolean;

  /**
   * True to search use formatted data.
   */
  searchFormatter?: boolean;

  /**
   * Escapes a string for insertion into HTML, replacing &, <, >, ", \`, and ' characters.
   */
  escape?: boolean;

  /**
   * True to show the title of column with 'radio' or 'singleSelect' 'checkbox' option.
   */
  showSelectTitle?: boolean;

  /**
   * Set input: show an input control,
   * select: show a select control,
   * datepicker: show a datepicker control.
   */
  filterControl?: "input" | "select" | "datepicker";

  /**
   * Set custom select filter values,
   * use var:variable to load from a variable
   * or url:http://www.example.com/data.json to load from a remote json file
   * or jso:{key:data} to load from a json string.
   */
  filterData?: string;
}

/**
 * classes or css
 */
interface ClassStyle {
  classes?: string;
  css?: object;
}

export interface AjaxParams<T> {
  data: QueryParams;
  success: (result: { total: number; rows: T[] }) => void;
}

export interface QueryParams {
  sort?: string;

  /**
   * 关键字 可以是任意列
   */
  search?: string;
  order: "asc" | "desc";
  offset: number;
  limit: number;

  /**
   * json string like: "{"p1":"1"}"
   */
  filter?: string;
}
