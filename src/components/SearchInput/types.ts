import { ChangeEvent } from "react"

export type Props = {
    value: string,
    disabled?: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}