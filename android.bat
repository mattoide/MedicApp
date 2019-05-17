@ECHO off

ECHO Inizio pulizia gradlew...

START /WAIT CMD /C  "CD %cd%\android & CALL gradlew.bat clean"
ECHO Fine pulizia gradlew.

ECHO Creo cartella per la build...

MKDIR android\app\build\intermediates\assets\debug
ECHO Cartella per la build creata!

pause

EXIT

