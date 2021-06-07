#!/usr/bin/env node
import nodeVersionAlias from "node-version-alias";

const rawVersion = process.argv.slice(2).join(" ")
try {
  console.log(await nodeVersionAlias(rawVersion))
} catch (e) {
  console.log(`Invalid node version specification '${rawVersion}'`)
  process.exit(1)
}
