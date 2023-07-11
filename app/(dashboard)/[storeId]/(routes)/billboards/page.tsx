import { FC } from "react";
import BillboardsClient from "./components/BillboardsClient";

interface BillboardPageProps {}

const BillboardPage: FC<BillboardPageProps> = ({}) => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardsClient />
      </div>
    </div>
  );
};

export default BillboardPage;
