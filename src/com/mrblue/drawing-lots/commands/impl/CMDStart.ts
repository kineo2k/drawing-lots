import { ICommand } from "../ICommand";
import { GameShell } from "../../shell/GameShell";
import { GameLauncher } from "../../GameLauncher";
import { Game } from "../../game/Game";

export class CMDStart implements ICommand {
    execute(gameLauncher: GameLauncher) {
        new Game().start();
    }
}