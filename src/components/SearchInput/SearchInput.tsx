import { FC } from "react";
import { Props } from "./types"

const SearchInput: FC<Props> = ({ onChange, value, disabled }) => {
    return (
        <input type="text" className="h-7 rounded-md p-2 text-black" value={value} onChange={onChange} disabled={disabled} placeholder="Search" />
    )
}

export default SearchInput;