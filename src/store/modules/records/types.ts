export interface InterfaceRecordsState {
  records: InterfaceRecord[] | null;
  record: InterfaceRecord | null;
}

export interface InterfaceRecord {
  id: string;
  limit: number;
  name: string;
}
