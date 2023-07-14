﻿"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";

export type OrderColumns = {
  id: string;
  phone: string;
  address: string;
  isPaid: boolean;
  totalPrice: string;
  products: string;

  createdAt: string;
};

export const columns: ColumnDef<OrderColumns>[] = [
  {
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
  },
  {
    accessorKey: "isPaid",
    header: "Paid",
  },
];
