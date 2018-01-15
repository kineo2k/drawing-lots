import { IMenu } from "../IMenu";
import { GameShell } from "../../shell/GameShell";
import { GameLauncher } from "../../GameLauncher";
import { HistoryManager } from "../../history/HistoryManager";

export class MenuHistory implements IMenu {
    execute(gameLauncher: GameLauncher) {
        const historyManager = new HistoryManager();
        historyManager.read("history.dat", (data) => {
            console.log("== 게임 히스토리 ==");
            console.log(data);
            console.log("================");

            gameLauncher.resumeInput();
        });
    }
}