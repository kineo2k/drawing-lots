import { ICommand } from "../ICommand";
import { GameShell } from "../../shell/GameShell";
import { GameLauncher } from "../../GameLauncher";

export class CMDEmpty implements ICommand {
    execute(gameLauncher: GameLauncher) {
        gameLauncher.resumeInput();
    }
}