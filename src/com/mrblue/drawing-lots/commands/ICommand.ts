import { GameLauncher } from "../GameLauncher";

export interface ICommand {
    execute(gameLaucher: GameLauncher);
}