import { FC } from "react";
import { Props } from './types'

const ErrorCard: FC<Props> = ({ error }) => {
    return (
        <div className="flex flex-row min-h-screen justify-center items-center">
            <div className="border-2 rounded-lg border-red-700 bg-red-500 text-white py-2 px-4 w-2/4 text-center">
                <p>{error}</p>
            </div>
        </div>

    )
}

export default ErrorCard;