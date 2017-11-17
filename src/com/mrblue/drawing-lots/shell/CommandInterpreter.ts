import { ICommand } from "../commands/ICommand";
import { CMDEmpty } from "../commands/impl/CMDEmpty";
import { CMDExit } from "../commands/impl/CMDExit";
import { CMDStart } from "../commands/impl/CMDStart";
import { CMDHistory } from "../commands/impl/CMDHistory";

export class CommandInterpreter {
    interpret(text: string): ICommand {
        const readNumber = parseInt(text, 10);

        switch (readNumber) {
            case 1:
            return new CMDStart();

            case 2:
            return new CMDHistory();

            case 3:
            return new CMDExit();

            default:
            return new CMDEmpty();
        }
    }
}