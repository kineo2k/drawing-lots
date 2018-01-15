import { IStage } from "../IStage";
import { GameShell } from "../../../shell/GameShell";
import { GameData } from "../../GameData";
import { GameLauncher } from "../../../GameLauncher";
import { HistoryManager } from "../../../history/HistoryManager";

export class StageDrawingLots implements IStage {
    _nextStage?: IStage;

    constructor(private _data: GameData) {
    }

    get prompt() {
        return "지금부터 추첨을 시작합니다~ Press Enter!";
    }

    get nextStage() {
        return this._nextStage;
    }

    set nextStage(newNextStage: IStage) {
        this._nextStage = newNextStage;
    }
    
    play(readLine: string) {
        const winners: Array<string> = [];
        let tmpArray = this._data.players.slice();

        for (let idx = 0; idx < this._data.numberOfWinners; idx++) {
            const drawingResult = this._drawing(tmpArray);

            winners.push(drawingResult[0]);
            tmpArray = drawingResult[1];
        }

        GameShell.shell.clear();
        GameShell.shell.print("========================================\n\n");
        GameShell.shell.print(`  당첨자 : ${winners.join(", ")}\n\n`, true);
        GameShell.shell.print("========================================\n\n축하합니다! 행코~ ^^\n\n");

        process.exit();
        /*
        const historyManager = new HistoryManager();
        historyManager.save("history.dat", winners.join(", "), () => {
            console.log("게임 기록을 저장 했습니다.");

            new GameLauncher().start();
        });
        */
    }

    private _drawing(arr: Array<string>): [string, string[]] {
        const randomIndex = this._makeRandom(0, arr.length);
        const player = arr[randomIndex];
        arr.splice(randomIndex, 1);
        // delete arr[randomIndex]; // 이렇게 처리하면 arr.length가 줄어들지 않음!
        return [player, arr];
    }

    private _makeRandom(min: number = 0, max: number = 1) {
        const randVal = Math.random() * (max - min) + min;
        return Math.floor(randVal);
    }
}