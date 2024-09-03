"use client"

import { useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";

import { SinglePeopleDocument } from "@/gql/queries/people/people.generated";

import CharacterCardDetailRow from "@/components/CharacterCardDetailRow/CharacterCardDetailRow";
import ErrorCard from "@/components/ErrorCard/ErrorCard";
import Loading from "@/components/Loading/Loading";

const CharacterPage = ({ params }: { params: { id: string } }) => {
    const { push } = useRouter()

    const { loading, error, data } = useQuery(SinglePeopleDocument, {
        variables: {
            id: params.id
        }
    })

    const character = {
        name: data?.person?.name ?? "",
        species: {
            id: data?.person?.species?.id ?? "",
            name: data?.person?.species?.name ?? "",
        },
        birthYear: data?.person?.birthYear ?? "",
        eyeColor: data?.person?.eyeColor ?? "",
        gender: data?.person?.gender ?? "",
        height: data?.person?.height?.toString() ?? "",
        homeworld: {
            id: data?.person?.homeworld?.id ?? "",
            name: data?.person?.homeworld?.name ?? "",
            diameter: data?.person?.homeworld?.diameter ?? "",
            gravity: data?.person?.homeworld?.gravity ?? "",
            orbitalPeriod: data?.person?.homeworld?.orbitalPeriod ?? "",
            rotationPeriod: data?.person?.homeworld?.rotationPeriod ?? "",
            population: data?.person?.homeworld?.population ?? "",
        },
        mass: data?.person?.mass ?? "",
        filmConnection: (data?.person?.filmConnection?.films ?? []).map(film => ({
            title: film?.title ?? "",
            releaseDate: film?.releaseDate ?? ""
        })),

    }

    const charactersBtnHandler = () => {
        push('/')
    }

    if (error) return <ErrorCard error={error.message} />

    return (
        <div className="flex flex-col items-center gap-y-6">
            <div className="flex  gap-4 items-center h-12 w-full px-4 bg-gray-600">
                <button type="button" className="text-lg" onClick={charactersBtnHandler}>Characters</button>
            </div>
            {loading ? (
                <Loading />
            ) : (
                <div className="px-4 py-3 m-2 flex flex-col gap-5 items-center max-w-7xl border rounded-lg border-gray-500 border-opacity-70 bg-gray-700 bg-opacity-90 ">
                    <h1 className="text-4xl underline underline-offset-4">{data?.person?.name}</h1>
                    <div className="flex gap-10">
                        <div>
                            <CharacterCardDetailRow title="Species" value={character.species.name} />
                            <CharacterCardDetailRow title="Birth Year" value={character.birthYear} />
                            <CharacterCardDetailRow title="Gender" value={character.gender} />
                            <CharacterCardDetailRow title="Height" value={`${character.height}cm`} />
                            <CharacterCardDetailRow title="Weight" value={`${character.mass}kg`} />
                            <CharacterCardDetailRow title="Eye Color" value={character.eyeColor} />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl underline pb-4 text-center">Home world: {character.homeworld.name}</h2>
                        <CharacterCardDetailRow title="Population" value={character.homeworld.population.toString()} />
                        <CharacterCardDetailRow title="Diameter" value={`${character.homeworld.diameter} km`} />
                        <CharacterCardDetailRow title="Rotation period" value={`${character.homeworld.rotationPeriod} hr`} />
                        <CharacterCardDetailRow title="Orbital period" value={`${character.homeworld.orbitalPeriod} hr`} />
                        <CharacterCardDetailRow title="Eye Color" value={character.homeworld.gravity} />
                    </div>
                    <div>
                        <h2 className="text-2xl underline pb-4 text-center">Film appearances:</h2>
                        {character.filmConnection.map(film => (
                            <p className="font-bold">{film.title} <span className="font-light">({film.releaseDate})</span></p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CharacterPage;