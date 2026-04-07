@echo off
REM Setup script for Thannlab project

setlocal enabledelayedexpansion

cd /d "C:\Users\nyiko\Downloads\Thannlab new"

REM Create directory structure
echo Creating directory structure...
mkdir app\services\web-design 2>nul
mkdir app\services\web-development 2>nul
mkdir app\services\ai-solutions 2>nul
mkdir app\work 2>nul
mkdir app\about 2>nul
mkdir app\contact 2>nul
mkdir app\blog 2>nul
mkdir src\components\layout 2>nul
mkdir src\components\sections 2>nul
mkdir src\components\ui 2>nul
mkdir src\components\common 2>nul
mkdir public 2>nul

echo Directory structure created successfully!

REM Check if npm is available
where npm >nul 2>nul
if errorlevel 1 (
    echo npm not found. Please install Node.js and npm first.
    exit /b 1
)

REM Install dependencies
echo Installing dependencies...
call npm install

echo Setup complete!
