export interface Config {
  token: string;
  project: string;
  outDir: string;
  tags?: string[];
  languages?: string[];
  concurrency?: number;
  transformLocaleCodes?: any[];
}
