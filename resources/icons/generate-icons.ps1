# CV Builder — PWA icon generator.
# Regenerates every icon file in this folder from a solid --accent square + "CV"
# monogram, drawn with System.Drawing (no extra deps, same approach used for the
# embedded Leadex logo — see project memory). Re-run after editing $Accent/$Text
# below, or replace the PNGs by hand with real artwork at the same names/sizes.
#
# Full-bleed, opaque, no rounded corners on purpose: iOS renders transparent
# areas of apple-touch-icon as black, and maskable icons get cropped to a
# shape (circle/squircle/etc.) by the OS — pre-rounding or transparency here
# would fight that. The maskable variant additionally keeps the glyph inside
# the ~80% "safe zone" so the crop never clips it.

Add-Type -AssemblyName System.Drawing

$Accent = [System.Drawing.Color]::FromArgb(255, 12, 111, 191) # #0c6fbf
$Text = "CV"
$OutDir = Split-Path -Parent $MyInvocation.MyCommand.Path

function New-AppIcon {
    param(
        [int]$Size,
        [string]$OutPath,
        [double]$GlyphScale
    )

    $bmp = New-Object System.Drawing.Bitmap($Size, $Size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    $bg = New-Object System.Drawing.SolidBrush($Accent)
    $g.FillRectangle($bg, 0, 0, $Size, $Size)

    $fontSize = [float]([double]$Size * $GlyphScale)
    $font = New-Object System.Drawing.Font("Segoe UI", $fontSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
    $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $format = New-Object System.Drawing.StringFormat
    $format.Alignment = [System.Drawing.StringAlignment]::Center
    $format.LineAlignment = [System.Drawing.StringAlignment]::Center
    $rect = New-Object System.Drawing.RectangleF(0, 0, $Size, $Size)
    $g.DrawString($Text, $font, $textBrush, $rect, $format)

    $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)

    $font.Dispose(); $textBrush.Dispose(); $format.Dispose(); $bg.Dispose()
    $g.Dispose(); $bmp.Dispose()
    Write-Output "Wrote $OutPath"
}

New-AppIcon -Size 192 -OutPath (Join-Path $OutDir "icon-192.png") -GlyphScale 0.44
New-AppIcon -Size 512 -OutPath (Join-Path $OutDir "icon-512.png") -GlyphScale 0.44
New-AppIcon -Size 512 -OutPath (Join-Path $OutDir "icon-512-maskable.png") -GlyphScale 0.30
New-AppIcon -Size 180 -OutPath (Join-Path $OutDir "apple-touch-icon.png") -GlyphScale 0.44
New-AppIcon -Size 32  -OutPath (Join-Path $OutDir "favicon.png") -GlyphScale 0.5
