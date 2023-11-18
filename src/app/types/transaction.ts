type TransactionType = {
  name: string;
  amount: number;
  date: string;
  status: "pending" | "success" | "failed" | "cancelled";
};

export default TransactionType;
