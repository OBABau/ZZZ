<#
  Moves legacy Node/Vite/Express files into a timestamped backup folder.
  Run from the repository root (PowerShell):

    .\scripts\cleanup_move_legacy_to_backup.ps1

  The script does not delete anything permanently; it moves matching files/directories
  into a backup folder you can inspect later.
#>

$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backupRoot = Join-Path -Path (Get-Location) -ChildPath ("backup_legacy_$timestamp")
New-Item -ItemType Directory -Path $backupRoot | Out-Null

$pathsToMove = @(
  'backend\\index.js',
  'backend\\package.json',
  'backend\\package-lock.json',
  'backend\\README.md',
  'backend\\.env',
  'backend\\.env.example',
  'backend\\.gitignore',
  'backend\\src\\config\\database.config.js',
  'backend\\src\\controllers\\example.controller.js',
  'backend\\src\\middleware\\example.middleware.js',
  'backend\\src\\models\\example.model.js',
  'backend\\src\\routes\\example.routes.js',
  'frontend\\package-lock.json',
  'frontend\\README.md',
  'frontend\\.gitignore',
  'frontend\\.env',
  'frontend\\.env.example',
  'frontend\\eslint.config.js',
  'frontend\\public\\vite.svg',
  'frontend\\src\\assets\\react.svg',
  'frontend\\src\\components\\ExampleComponent.jsx',
  'frontend\\src\\pages\\HomePage.jsx',
  'frontend\\src\\services\\api.js',
  'frontend\\src\\utils\\helpers.js'
)

Write-Host "Moving legacy files (if present) to: $backupRoot`n"

$moved = 0
foreach ($rel in $pathsToMove) {
  $full = Join-Path (Get-Location) $rel
  if (Test-Path $full) {
    $targetDir = Join-Path $backupRoot (Split-Path $rel -Parent)
    if (-not (Test-Path $targetDir)) { New-Item -ItemType Directory -Path $targetDir -Force | Out-Null }
    Move-Item -Path $full -Destination $targetDir -Force
    Write-Host "Moved: $rel"
    $moved++
  }
}

if ($moved -eq 0) {
  Write-Host "No legacy files were found to move."
} else {
  Write-Host "\nMoved $moved items to $backupRoot"
}

Write-Host "Cleanup script finished. Inspect the backup folder before deleting anything permanently." 
