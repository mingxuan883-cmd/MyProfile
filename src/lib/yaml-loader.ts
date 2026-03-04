import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export async function loadConfig() {
  const configPath = path.join(process.cwd(), "data", "config.yaml");
  const fileContents = fs.readFileSync(configPath, "utf8");
  const config = yaml.load(fileContents) as any;
  return config;
}
