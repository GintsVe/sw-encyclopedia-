import { FC } from "react";
import { Props } from "./types"

const SortButton: FC<Props> = ({ onClick, ascending }) => {
    return (
        <button type="button" onClick={onClick}>
            {ascending ? "A↓" : "A↑"}
        </button>
    )
}

export default SortButton;