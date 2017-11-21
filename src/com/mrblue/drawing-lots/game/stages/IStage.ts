export interface IStage {
    prompt: string;
    nextStage?: IStage;

    play(readLine: string);
}