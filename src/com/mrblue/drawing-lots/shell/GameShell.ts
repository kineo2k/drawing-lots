export class GameShell {
    private static _shell: GameShell;

    private constructor() {
    }

    static get shell() {
        if (!GameShell._shell) {
            GameShell._shell = new GameShell();
        }

        return GameShell._shell;
    }

    listen(callback: Function) {
        if (process.stdin.isPaused)
            process.stdin.resume();
        
        process.stdin.removeAllListeners();
        process.stdin.on("data", function(buffer) {
            const readLine = buffer.toString().trim();
            callback(readLine);
        });
    }

    print(msg: string = "") {
        process.stdout.write(msg);
    }

    println(msg: string = "") {
        process.stdout.write(msg + "\n");
    }

    end() {
        process.stdout.end();
    }
}