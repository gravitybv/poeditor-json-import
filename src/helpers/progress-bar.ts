import cliProgress from "cli-progress";

export const progressBar = new cliProgress.SingleBar(
  { etaBuffer: 100 },
  cliProgress.Presets.shades_classic
);
