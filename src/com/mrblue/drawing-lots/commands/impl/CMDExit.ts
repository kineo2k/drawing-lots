import { ICommand } from "../ICommand";
import { GameShell } from "../../shell/GameShell";
import { GameLauncher } from "../../GameLauncher";

export class CMDExit implements ICommand {
    execute(gameLauncher: GameLauncher) {
        GameShell.shell.print("제비 뽑기를 종료합니다. 행코~^^/");
        GameShell.shell.end();

        process.exit();
    }
}