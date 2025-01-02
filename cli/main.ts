#!/usr/bin/env node
import { Command } from "commander"
import { registerDev } from "./dev/register"
import { registerAuthLogin } from "./auth/login/register"
import { registerAuthLogout } from "./auth/logout/register"
import { registerAuth } from "./auth/register"
import { registerConfig } from "./config/register"
import { registerConfigPrint } from "./config/print/register"
import { perfectCli } from "perfect-cli"

const program = new Command()

program
  .name("tsci")
  .description("CLI for developing tscircuit snippets")
  .version("1.0.0")

registerDev(program)

registerAuth(program)
registerAuthLogin(program)
registerAuthLogout(program)

registerConfig(program)
registerConfigPrint(program)

if (process.argv.length === 2) {
  perfectCli(program, process.argv)
} else {
  program.parse()
}
