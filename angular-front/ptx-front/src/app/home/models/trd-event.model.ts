export class TrdEvent {
    id: number;
    name: TrdEventType;
    info: string;
    asset: string;
    initialPrice: number;
    finalPrice: number;
    initialTotal: number;
    finalTotal: number;
    quantity: number;
    valorization: number;
    moment: Date;
}

export enum TrdEventType {
    BUY = 'BUY',
    SELL = 'SELL',
    INFO = 'INFOR',
    ERROR = 'ERROR',
    START = 'START',
    FINISH = 'FINISH',
    FORCESELL = 'FORCESELL'
}