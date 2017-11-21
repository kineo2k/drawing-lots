import { IStage } from "../IStage";
import { GameShell } from "../../../shell/GameShell";
import { GameData } from "../../GameData";

export class StageRegisterPlayers implements IStage {
    _nextStage?: IStage;

    constructor(private _data: GameData) {
    }

    get prompt() {
        return "플레이어를 입력하세요 (ex: 아이유, 손담비, 이효리) : ";
    }
    
    get nextStage() {
        return this._nextStage;
    }

    set nextStage(newNextStage: IStage) {
        this._nextStage = newNextStage;
    }

    play(readLine: string) {
        if (readLine.trim().length === 0) {
            GameShell.shell.print(this.prompt);
            return;
        }

        const players = this._parsePlayers(readLine);
        if (players.length === 0) {
            GameShell.shell.print(this.prompt);
            return;
        }

        this._data.players.push(...players);

        GameShell.shell.print(this.nextStage.prompt);
        GameShell.shell.listen(this.nextStage.play.bind(this.nextStage));
    }

    private _parsePlayers(readLine: string) {
        return readLine.split(",").filter(function(p) {
            return p.trim() !== "";
        });
    }
}