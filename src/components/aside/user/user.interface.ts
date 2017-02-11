export interface Props {
    id?: number,
    name?: string,
    selected?: boolean,
    onSelect?: () => void
}

export interface State {
    name: string
}
