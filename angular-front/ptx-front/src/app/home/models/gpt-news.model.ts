export interface GptNews {
    text: string;
    timestamp: Date;
    sourceAttributions: SourceAttribution[];
}

export interface SourceAttribution {
    providerDisplayName: string;
    seeMoreUrl: string;
}