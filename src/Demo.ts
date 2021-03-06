import $ from "jquery";
import { TableOptions } from "./BtOptions";

interface RowModel {
  id: number;
  name: string;
}

export default function InitTable(dom, arr: RowModel[]) {
  const options: TableOptions<RowModel> = {
    pagination: true,
    columns: [
      {
        title: "column1",
        checkbox: true
      }
    ]
  };

  $(dom).bootstrapTable(options);
  $(dom).bootstrapTable("load", arr);
}
