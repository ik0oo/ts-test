export interface Money {
    rur: number,
    usd: number,
    eur: number
}

export interface Props {
    id?: number,
    name?: string,
    email?: string,
    selected?: boolean,
    moneyList?: Money[],
    money?: Money,
    rur?: number,
    usd?: number,
    eur?: number

    onSelect?: () => void,
    onChange?: () => void
}

export interface State {}
