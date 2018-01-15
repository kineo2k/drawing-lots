import { GameShell } from "../shell/GameShell";
import { IStage } from "./stages/IStage";
import { StageRegisterPlayers } from "./stages/impl/StageRegisterPlayers";
import { StageNumberOfWinners } from "./stages/impl/StageNumberOfWinners";
import { GameData } from "./GameData";
import { StageDrawingLots } from "./stages/impl/StageDrawingLots";

export class Game {
    private _stages: Array<IStage>;

    constructor() {
        this._initStages();
    }

    private _initStages() {
        const data = new GameData();

        this._stages = [
            new StageRegisterPlayers(data),
            new StageNumberOfWinners(data),
            new StageDrawingLots(data)
        ];
    }

    start() {
        GameShell.shell.clear();
        GameShell.shell.println("제비 뽑기를 시작할께유~~!", true);
        
        this._stages.forEach(function(stage, index) {
            if (index === 0)
                return;
            
            const prevStage = this._stages[index - 1];
            prevStage.nextStage = stage;
        }.bind(this));

        const firstStage = this._stages[0];
        GameShell.shell.print(firstStage.prompt, true);
        GameShell.shell.listen(firstStage.play.bind(firstStage));
    }
}