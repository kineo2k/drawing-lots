export class GameShell {
    private static _shell: GameShell;
    private _isListen = false;

    private constructor() {
    }

    static get shell() {
        if (!GameShell._shell) {
            GameShell._shell = new GameShell();
        }

        return GameShell._shell;
    }

    listen(callback: Function) {
        if (this._isListen)
            return;
        
        this._isListen = true;

        process.stdin.resume();
        process.stdin.on("data", function(buffer) {
            const readLine = buffer.toString().trim();
            callback(readLine);
        });
    }

    print(msg: string = "") {
        process.stdout.write(msg);
    }

    end() {
        process.stdout.end();
    }
}