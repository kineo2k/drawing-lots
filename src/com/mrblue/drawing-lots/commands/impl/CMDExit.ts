import { ICommand } from "../ICommand";
import { GameShell } from "../../shell/GameShell";

export class CMDExit implements ICommand {
    execute() {
        GameShell.shell.print("제비 뽑기를 종료합니다. 행코~^^/");
        GameShell.shell.end();

        process.exit();
    }
}