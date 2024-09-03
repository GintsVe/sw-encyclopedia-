import { FC } from 'react'
import { Props } from './types'

const CharacterCardDetailRow: FC<Props> = ({ title, value, route }) => {
    return (
        <p className="text-neutral-300 font-semibold">{title} - <span className={`text-white font-normal ${route ? "cursor-pointer underline" : ""}`}>{value}</span></p>
    )
}

export default CharacterCardDetailRow;