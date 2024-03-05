export interface GptNews {
    body: BodyMessage[];
}

export interface BodyMessage {
    id?: string;
    text: string;
    type: string;
    wrap: boolean;
}