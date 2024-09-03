import React, { FC } from "react"
import { useRouter } from "next/navigation"

import { Props } from "./types"

import CharacterCardDetailRow from "../CharacterCardDetailRow/CharacterCardDetailRow"


const CharacterCard: FC<Props> = ({ id, name, species, gender, birthYear, homeworld }) => {
    const { push } = useRouter()

    const cardClickHandler = () => {
        push(`/character/${id}`)
    }

    return (
        <div className="w-72 border rounded-lg border-gray-500 border-opacity-70 bg-gray-700 bg-opacity-90 cursor-pointer transition duration-500 hover:scale-105" onClick={cardClickHandler}>
            <h1 className="font-bold text-2xl text-center">{name}</h1>
            <div className="px-2 py-4">
                <CharacterCardDetailRow title="Birth Year" value={birthYear} />
                <CharacterCardDetailRow title="Species" value={species} />
                <CharacterCardDetailRow title="Gender" value={gender} />
                <CharacterCardDetailRow title="Home World" value={homeworld} />
            </div>
        </div>
    )
}

export default CharacterCard