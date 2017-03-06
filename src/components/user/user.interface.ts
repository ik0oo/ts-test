export interface History {
    rur: number[],
    usd: number[],
    eur: number[],
    [key: string]: any
}

export interface Props {
    id?: number,
    name?: string,
    email?: string,
    selected?: boolean,
    rur?: number,
    usd?: number,
    eur?: number,
    history?: History,

    onSelect?: () => void,
}

export interface State {}
