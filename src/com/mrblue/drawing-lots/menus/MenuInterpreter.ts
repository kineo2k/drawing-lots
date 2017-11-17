import { IMenu } from "../menus/IMenu";
import { MenuEmpty } from "../menus/impl/MenuEmpty";
import { MenuExit } from "../menus/impl/MenuExit";
import { MenuStart } from "../menus/impl/MenuStart";
import { MenuHistory } from "../menus/impl/MenuHistory";

export class MenuInterpreter {
    interpret(text: string): IMenu {
        const readNumber = parseInt(text, 10);

        switch (readNumber) {
            case 1:
            return new MenuStart();

            case 2:
            return new MenuHistory();

            case 3:
            return new MenuExit();

            default:
            return new MenuEmpty();
        }
    }
}