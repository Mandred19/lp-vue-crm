export interface InterfaceRecordsState {
  records: InterfaceRecord[] | null;
  record: InterfaceRecord | null;
}

export interface InterfaceRecord {
  amount: number;
  categoryId: string;
  date: Date;
  description: string;
  id: string;
  type: number;
}
