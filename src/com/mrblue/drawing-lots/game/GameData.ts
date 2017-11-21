export class GameData {
    private _players: Array<string>;
    private _numberOfWinners: number;

    constructor() {
        this._players = [];
        this._numberOfWinners = 0;
    }

    get players() {
        return this._players;
    }

    get numberOfWinners() {
        return this._numberOfWinners;
    }

    set numberOfWinners(newNumberOfWinners: number) {
        this._numberOfWinners = newNumberOfWinners;
    }
}