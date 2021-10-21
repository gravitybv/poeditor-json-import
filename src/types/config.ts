export interface Config {
  token: string;
  project: string;
  outDir: string;
  sort?: boolean;
  tags?: string[];
  languages?: string[];
  concurrency?: number;
  transformLocaleCodes?: any[];
}
