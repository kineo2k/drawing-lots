import { IMenu } from "../IMenu";
import { GameShell } from "../../shell/GameShell";
import { GameLauncher } from "../../GameLauncher";

export class MenuEmpty implements IMenu {
    execute(gameLauncher: GameLauncher) {
        gameLauncher.resumeInput();
    }
}