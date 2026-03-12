param(
  [string]$TargetRoot = "$HOME/.config/opencode"
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$agentsSource = Join-Path $repoRoot "agents"
$commandsSource = Join-Path $repoRoot "commands"
$templatesSource = Join-Path $repoRoot "templates"

$agentsTarget = Join-Path $TargetRoot "agents"
$commandsTarget = Join-Path $TargetRoot "commands"
$templatesTarget = Join-Path $TargetRoot "templates"

New-Item -ItemType Directory -Force -Path $agentsTarget | Out-Null
New-Item -ItemType Directory -Force -Path $commandsTarget | Out-Null
New-Item -ItemType Directory -Force -Path $templatesTarget | Out-Null

Copy-Item -Path (Join-Path $agentsSource "*") -Destination $agentsTarget -Recurse -Force
Copy-Item -Path (Join-Path $commandsSource "*") -Destination $commandsTarget -Recurse -Force
Copy-Item -Path (Join-Path $templatesSource "*") -Destination $templatesTarget -Recurse -Force

Write-Host "Installed opencode-plan-todo into $TargetRoot"
Write-Host "Restart OpenCode to load the updated agents and commands."
