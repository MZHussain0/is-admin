"use client";
import { FC } from "react";

import Heading from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

import { OrderColumns, columns } from "./Columns";

interface OrdersClientProps {
  data: OrderColumns[];
}

const OrdersClient: FC<OrdersClientProps> = ({ data }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Orders (${data?.length}) `}
          description="Manage orders for your store"
        />
      </div>
      <Separator />

      <DataTable columns={columns} data={data} searchKey="products" />
    </>
  );
};

export default OrdersClient;
