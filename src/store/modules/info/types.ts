export interface InterfaceInfoState {
  info: InterfaceInfo | null;
  lastLocale: string | null;
}

export interface InterfaceInfo {
  bill: number;
  locale: string;
  name: string;
}
