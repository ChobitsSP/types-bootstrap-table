import { ColumnOptions } from "../Column/Index";
import ClassStyle from "../ClassStyle";

/**
 * The table options are defined in jQuery.fn.bootstrapTable.defaults.
 */
export default interface TableOptions<T> {
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
  buttonsClass?: ButtonsClass;

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
  detailFormatter?: (index: number, row: T, element) => string;
  detailFilter?: (index: number, row: T) => boolean;
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
}

type ButtonsClass =
  | "default"
  | "primary"
  | "danger"
  | "warning"
  | "success"
  | "info"
  | "link";

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
