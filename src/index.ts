import type { Plugin } from "@opencode-ai/plugin"
import { deployAssets } from "./deploy.js"

/**
 * opencode-enhance-plan Plugin
 *
 * An enhanced planning workflow plugin for OpenCode that provides:
 * - Automatic deployment of agents/commands/templates to OpenCode config
 * - Event hooks for plan state monitoring and logging
 */
export const EnhancePlanPlugin: Plugin = async ({ client }) => {
  // Deploy assets (agents, commands, templates) to user's OpenCode config directory
  const pkgRoot = new URL("..", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1")
  const deployResult = await deployAssets({
    sourceDir: pkgRoot,
    targetDir: "",  // will resolve to ~/.config/opencode/ automatically
  })

  if (deployResult.deployed > 0) {
    await client.app.log({
      body: {
        service: "opencode-enhance-plan",
        level: "info",
        message: `Deployed or refreshed ${deployResult.deployed} managed asset(s) in OpenCode config`,
        extra: {
          skipped: deployResult.skipped,
          deployed: deployResult.deployed,
          details: deployResult.details,
        },
      },
    })
  } else {
    await client.app.log({
      body: {
        service: "opencode-enhance-plan",
        level: "info",
        message: `All managed assets up-to-date (${deployResult.skipped} skipped)`,
      },
    })
  }

  return {
    "event": async (input) => {
      // Listen for events for plan state tracking
      const event = input.event as Record<string, unknown>
      if (event && event.type === "todo.updated") {
        await client.app.log({
          body: {
            service: "opencode-enhance-plan",
            level: "info",
            message: "Todo state updated",
            extra: { event },
          },
        })
      }
    },
  }
}

// Default export for OpenCode plugin loader
export default EnhancePlanPlugin
