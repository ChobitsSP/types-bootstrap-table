export default interface Options<T> {
  /**
   * Fires when all events trigger
   * name: the event name,
   * args: the event data.
   */
  onAll?: (name: string, args) => void;

  /**
   * Fires when user click a row
   */
  onClickRow?: (row: T, $element: Element, field: string) => void;

  onDblClickRow?: (row: T, $element: Element, field: string) => void;

  onClickCell?: (field: string, value, row: T, $element: Element) => void;
}
