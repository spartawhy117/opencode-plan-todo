import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from "node:fs"
import { join, resolve } from "node:path"
import { homedir } from "node:os"

export interface DeployOptions {
  /** Root directory of the npm package containing agents/, commands/, templates/ */
  sourceDir: string
  /** Target OpenCode config directory. Defaults to ~/.config/opencode/ */
  targetDir: string
  /** Optional compatibility flag. Managed plugin assets are overwritten by default. */
  force?: boolean
}

export interface DeployResult {
  /** Number of files deployed (copied/updated) */
  deployed: number
  /** Number of files skipped (already up-to-date) */
  skipped: number
  /** Detail messages for each file operation */
  details: string[]
}

const ASSET_DIRS = ["agents", "commands", "templates"] as const

/**
 * Resolve the default OpenCode configuration directory.
 * Uses ~/.config/opencode/ on all platforms.
 */
function getDefaultConfigDir(): string {
  return join(homedir(), ".config", "opencode")
}

/**
 * Recursively collect all files in a directory, returning relative paths.
 */
function collectFiles(dir: string, base: string = ""): string[] {
  const results: string[] = []
  if (!existsSync(dir)) return results

  const entries = readdirSync(dir)
  for (const entry of entries) {
    const fullPath = join(dir, entry)
    const relativePath = base ? join(base, entry) : entry
    const stat = statSync(fullPath)
    if (stat.isDirectory()) {
      results.push(...collectFiles(fullPath, relativePath))
    } else {
      results.push(relativePath)
    }
  }
  return results
}

/**
 * Compare two files by content.
 * Returns true if they are identical.
 */
function filesMatch(pathA: string, pathB: string): boolean {
  try {
    const contentA = readFileSync(pathA)
    const contentB = readFileSync(pathB)
    return contentA.equals(contentB)
  } catch {
    return false
  }
}

/**
 * Deploy assets (agents, commands, templates) from the plugin package
 * to the user's OpenCode configuration directory.
 *
 * Behavior:
 * - If target file does not exist: copy it
 * - If target file exists and content matches: skip
 * - If target file exists and content differs: overwrite it to refresh managed plugin assets
 */
export async function deployAssets(options: DeployOptions): Promise<DeployResult> {
  const targetRoot = options.targetDir || getDefaultConfigDir()
  const sourceRoot = options.sourceDir

  const result: DeployResult = {
    deployed: 0,
    skipped: 0,
    details: [],
  }

  for (const assetDir of ASSET_DIRS) {
    const sourceAssetDir = join(sourceRoot, assetDir)
    const targetAssetDir = join(targetRoot, assetDir)

    if (!existsSync(sourceAssetDir)) {
      result.details.push(`[skip] ${assetDir}/ not found in package`)
      continue
    }

    const files = collectFiles(sourceAssetDir)
    for (const relativePath of files) {
      const sourcePath = join(sourceAssetDir, relativePath)
      const targetPath = join(targetAssetDir, relativePath)
      const targetExists = existsSync(targetPath)

      if (targetExists && filesMatch(sourcePath, targetPath)) {
        result.skipped++
        continue
      }

      // Ensure parent directory exists
      const targetParent = resolve(targetPath, "..")
      mkdirSync(targetParent, { recursive: true })

      // Copy file
      const content = readFileSync(sourcePath)
      writeFileSync(targetPath, content)
      result.deployed++
      result.details.push(`[${targetExists ? "refresh" : "deploy"}] ${assetDir}/${relativePath}`)
    }
  }

  return result
}
