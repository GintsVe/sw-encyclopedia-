"use client"

import { ChangeEvent, useState } from "react";
import { useQuery } from "@apollo/client";

import { AllPeopleDocument } from "@/gql/queries/people/people.generated";

import CharacterCard from "@/components/CharacterCard/CharacterCard";
import ErrorCard from "@/components/ErrorCard/ErrorCard";
import SearchInput from "@/components/SearchInput/SearchInput";
import SortButton from "@/components/SortButton/SortButton";
import Loading from "@/components/Loading/Loading";


const Home = () => {
  const [search, setSearch] = useState("");
  const [ascending, setAscending] = useState(true)

  const { loading, error, data } = useQuery(AllPeopleDocument)

  const characters = (data?.allPeople?.people ?? []).map((people) => ({
    id: people?.id ?? "",
    name: people?.name ?? "",
    gender: people?.gender ?? "",
    birthYear: people?.birthYear ?? "",
    species: people?.species?.name ?? "",
    homeworld: people?.homeworld?.name ?? "",
  }))

  const charactersList = characters.filter(item => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  const sortedCharacterList = charactersList.sort((a, b) => ascending ? (a?.name ?? "").localeCompare(b?.name ?? "") : (b?.name ?? "").localeCompare(a?.name ?? ""))

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const sortHandler = () => {
    setAscending(!ascending)
  }

  if (error) return <ErrorCard error={error.message} />

  return (
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex justify-end gap-4 items-center h-12 w-full px-4 bg-gray-600">
        <SortButton ascending={ascending} onClick={sortHandler} />
        <SearchInput onChange={searchHandler} value={search} disabled={loading} />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="px-3 flex flex-wrap justify-center gap-4 max-w-7xl ">
          {
            sortedCharacterList.map(({ id, name, gender, birthYear, species, homeworld }) => (
              <CharacterCard key={id} id={id} name={name} gender={gender} birthYear={birthYear} species={species} homeworld={homeworld} />
            ))
          }
        </div>
      )}
    </div>
  );
}

export default Home;