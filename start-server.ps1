# Holy Spirit Home Website Server
# This script uses built-in Windows PowerShell to serve the website

$port = 8000
$root = Join-Path $PSScriptRoot "dist"

Write-Host ""
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "   Holy Spirit Home Website" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Starting website server..." -ForegroundColor Green
Write-Host ""
Write-Host "Website will open at: http://localhost:$port" -ForegroundColor Yellow
Write-Host ""
Write-Host "To stop the server, close this window" -ForegroundColor Gray
Write-Host "or press Ctrl+C" -ForegroundColor Gray
Write-Host ""
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Create HTTP listener
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "Server started successfully!" -ForegroundColor Green
    Write-Host ""

    # Open browser after a short delay
    Start-Job -ScriptBlock {
        Start-Sleep -Seconds 2
        Start-Process "http://localhost:8000"
    } | Out-Null

    # MIME types
    $mimeTypes = @{
        ".html" = "text/html"
        ".css"  = "text/css"
        ".js"   = "application/javascript"
        ".json" = "application/json"
        ".png"  = "image/png"
        ".jpg"  = "image/jpeg"
        ".jpeg" = "image/jpeg"
        ".gif"  = "image/gif"
        ".svg"  = "image/svg+xml"
        ".ico"  = "image/x-icon"
        ".woff" = "font/woff"
        ".woff2" = "font/woff2"
        ".ttf"  = "font/ttf"
    }

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $localPath = $request.Url.LocalPath
        if ($localPath -eq "/") {
            $localPath = "/index.html"
        }

        $filePath = Join-Path $root $localPath.TrimStart("/")

        if (Test-Path $filePath -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $extension = [System.IO.Path]::GetExtension($filePath).ToLower()

            if ($mimeTypes.ContainsKey($extension)) {
                $response.ContentType = $mimeTypes[$extension]
            } else {
                $response.ContentType = "application/octet-stream"
            }

            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            # Serve index.html for SPA routing
            $indexPath = Join-Path $root "index.html"
            if (Test-Path $indexPath) {
                $content = [System.IO.File]::ReadAllBytes($indexPath)
                $response.ContentType = "text/html"
                $response.ContentLength64 = $content.Length
                $response.OutputStream.Write($content, 0, $content.Length)
            } else {
                $response.StatusCode = 404
            }
        }

        $response.Close()
    }
} catch {
    Write-Host "Error: $_" -ForegroundColor Red
} finally {
    $listener.Stop()
}
