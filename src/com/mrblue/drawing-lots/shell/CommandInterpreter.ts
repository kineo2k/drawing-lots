import { ICommand } from "../commands/ICommand";
import { CMDEmpty } from "../commands/impl/CMDEmpty";
import { CMDExit } from "../commands/impl/CMDExit";

export class CommandInterpreter {
    interpret(text: string): ICommand {
        const readNumber = parseInt(text, 10);

        switch (readNumber) {
            case 1:
            break;

            case 2:
            break;

            case 3:
            return new CMDExit();

            default:
            return new CMDEmpty();
        }
    }
}