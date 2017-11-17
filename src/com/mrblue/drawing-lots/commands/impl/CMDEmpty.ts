import { ICommand } from "../ICommand";
import { GameShell } from "../../shell/GameShell";

export class CMDEmpty implements ICommand {
    execute() {
        GameShell.shell.print("원하는 메뉴 번호를 입력하세요 (1~3) : ");
    }
}