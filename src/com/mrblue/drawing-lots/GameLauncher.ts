import { GameShell } from "./shell/GameShell";
import { MenuInterpreter } from "./menus/MenuInterpreter";
import { IMenu } from "./menus/IMenu";

export class GameLauncher {
    private _interpreter: MenuInterpreter;

    constructor() {
        this._interpreter = new MenuInterpreter();
    }

    start() {
        GameShell.shell.print("제비 뽑기를 시작합니다 ^^ 와~~ 짝짝짝짝!!!");
        GameShell.shell.listen(this._executeCommand.bind(this));

        this._printMenus();
    }

    private _printMenus() {
        GameShell.shell.print(
`
=====================================
  1. 제비 뽑기 시작
  2. 이전 결과 보기
  3. 제비 뽑기 종료
=====================================

원하는 메뉴 번호를 입력하세요 (1~3) : `
        );
    }

    resumeInput() {
        GameShell.shell.print("원하는 메뉴 번호를 입력하세요 (1~3) : ");
    }

    private _executeCommand(readLine: string) {
        const command = this._interpreter.interpret(readLine);
        command.execute(this);
    }
}