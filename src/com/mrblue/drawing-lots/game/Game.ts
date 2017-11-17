import { GameShell } from "../shell/GameShell";

export class Game {
    start() {
        GameShell.shell.print("제비 뽑기를 시작합니다!!");

        GameShell.shell.listen(this._executeCommand.bind(this));
    }

    private _executeCommand(readLine: string) {
        // const command = this._interpreter.interpret(readLine);
        // command.execute(this);
   
        GameShell.shell.print(">>" + readLine);
    }
}