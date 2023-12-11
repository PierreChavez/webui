@echo off
setlocal

:: Get component name from the first argument
set "COMPONENT_NAME=%~1"

:: Get component type from the second argument
set "COMPONENT_TYPE=%~2"

:: Create a new directory with the component name
mkdir src\components\%COMPONENT_TYPE%\%COMPONENT_NAME%

:: Navigate into the new directory
cd src\components\%COMPONENT_TYPE%\%COMPONENT_NAME%

:: Create the JSX and CSS module files
(
echo import React from 'react';
echo import styles from './%COMPONENT_NAME%.module.css';
echo.
echo const %COMPONENT_NAME% = ^(^) ^=^> ^(
echo   ^<div className={styles.%COMPONENT_NAME%}^>
echo     {^/^* Your component code here ^*^/}
echo   ^<^/div^>
echo ^)^;
echo.
echo export default %COMPONENT_NAME%;
) > %COMPONENT_NAME%.jsx

(
echo .%COMPONENT_NAME% {
echo  ^/^* Add your styles here ^*^/
echo }
) > %COMPONENT_NAME%.module.css