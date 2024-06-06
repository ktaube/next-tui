import React from "react";
import { App } from "./src/App.js";
import { withFullScreen } from "./src/components/withFullScreen.js";

const ink = withFullScreen(<App />, { exitOnCtrlC: true });

ink.start();
await ink.waitUntilExit();
