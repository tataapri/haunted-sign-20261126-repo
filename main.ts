import { mkdirSync, writeFileSync } from "node:fs";

const entry = "WARNING: HAUNTED SERVER ROOM. Do not unplug anything — the ghosts did that last Tuesday and we lost three databases.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
