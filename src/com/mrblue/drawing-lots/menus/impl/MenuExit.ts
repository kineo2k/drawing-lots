import { IMenu } from "../IMenu";
import { GameShell } from "../../shell/GameShell";
import { GameLauncher } from "../../GameLauncher";

export class MenuExit implements IMenu {
    execute(gameLauncher: GameLauncher) {
        GameShell.shell.print("제비 뽑기를 종료합니다. 행코~^^/", true);
        GameShell.shell.end();

        process.exit();
    }
}