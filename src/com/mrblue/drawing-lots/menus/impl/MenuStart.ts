import { IMenu } from "../IMenu";
import { GameShell } from "../../shell/GameShell";
import { GameLauncher } from "../../GameLauncher";
import { Game } from "../../game/Game";

export class MenuStart implements IMenu {
    execute(gameLauncher: GameLauncher) {
        new Game().start();
    }
}