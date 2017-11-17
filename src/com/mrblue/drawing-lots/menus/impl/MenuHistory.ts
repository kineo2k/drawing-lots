import { IMenu } from "../IMenu";
import { GameShell } from "../../shell/GameShell";
import { GameLauncher } from "../../GameLauncher";

export class MenuHistory implements IMenu {
    execute(gameLauncher: GameLauncher) {
        GameShell.shell.print("게임 이력을 보여줍니다.\n");
        
        gameLauncher.resumeInput();
    }
}