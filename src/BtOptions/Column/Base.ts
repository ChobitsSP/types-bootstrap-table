import ClassStyle from "../ClassStyle";

/**
 * The column options is defined in jQuery.fn.bootstrapTable.columnDefaults.
 */
export default interface ColumnOptions<T> {
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
  cellStyle?: CellStyle<T>;

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
}

interface CellStyle<T> {
  /**
   * CellStyle
   * @template T
   * @param {*} value the field value.
   * @param {T} row the row record data
   * @param {number} index the row index.
   * @param {string} field the row field.
   * @returns {ClassStyle} Support classes or css
   */
  (value, row: T, index: number, field: string): ClassStyle;
}
