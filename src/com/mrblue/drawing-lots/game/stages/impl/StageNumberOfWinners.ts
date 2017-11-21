import { IStage } from "../IStage";
import { GameShell } from "../../../shell/GameShell";
import { GameData } from "../../GameData";

export class StageNumberOfWinners implements IStage {
    _nextStage?: IStage;

    constructor(private _data: GameData) {
    }

    get prompt() {
        return "몇명을 추첨하실건가요? : ";
    }

    get nextStage() {
        return this._nextStage;
    }

    set nextStage(newNextStage: IStage) {
        this._nextStage = newNextStage;
    }
    
    play(readLine: string) {
        const num = parseInt(readLine, 10);
        if (isNaN(num)) {
            GameShell.shell.print(this.prompt);
            return;
        }

        const numberOfWinners = parseInt(readLine, 10);

        if (this._data.players.length < numberOfWinners) {
            GameShell.shell.println("    추첨인수는 등록한 플레이어 수보다 작아야합니다.");
            GameShell.shell.print(this.prompt);
            return;
        }

        this._data.numberOfWinners = numberOfWinners;

        GameShell.shell.print(this.nextStage.prompt);
        GameShell.shell.listen(this.nextStage.play.bind(this.nextStage));
    }
}