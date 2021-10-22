export interface Config {
  token: string;
  project: string;
  outDir: string;
  sort?: boolean;
  filter?: string;
  tags?: string[];
  languages?: string[];
  concurrency?: number;
  transformLocaleCodes?: any[];
}
