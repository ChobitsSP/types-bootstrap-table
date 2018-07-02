/**
 * https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/filter-control#column-options
 */
export default interface Options<T> {
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

  /**
   * If the datepicker option is set use this option to configure the datepicker with the native options.
   */
  filterDatepickerOptions?: any;

  /**
   * Set to true if you want to use the strict search mode.
   */
  filterStrictSearch?: boolean;
}
