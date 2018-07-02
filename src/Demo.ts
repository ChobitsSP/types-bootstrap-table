import { TableOptions } from "./BtOptions";

interface RowModel {
  id: number;
  name: string;
}

export default function GetOptions(vm) {
  const options: TableOptions<RowModel> = {
    pagination: true,
    columns: [
      {
        title: "column1",
        checkbox: true
      }
    ]
  };
  return options;
}
