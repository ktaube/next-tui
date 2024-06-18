import React from "react";
import { App } from "./src/App.js";
import { withFullScreen } from "./src/components/withFullScreen.js";
import type { Config } from "./src/types.js";

import { parse } from "path";

function readFlag<V extends string | null>(flag: string, defaultValue: V): V {
  const flagIndex = process.argv.indexOf(flag);
  if (flagIndex !== -1) {
    return parse(process.argv[flagIndex + 1]).dir as V;
  } else {
    return defaultValue;
  }
}

const directoryPath = readFlag("-d", process.cwd());
console.log(`Directory path specified: ${directoryPath}`);

const helpFlag = process.argv.includes("--help");
if (helpFlag) {
  console.log("Usage: node index.tsx [-d <directory_path>]");
  console.log("Options:");
  console.log(
    "  -d <directory_path>  Specify the directory path to be used by the application."
  );
  process.exit(0);
}

const config: Config = {
  rootPath: directoryPath,
};

const ink = withFullScreen(<App config={config} />, { exitOnCtrlC: true });

ink.start();
await ink.waitUntilExit();
