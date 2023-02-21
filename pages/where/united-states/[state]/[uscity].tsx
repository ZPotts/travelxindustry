import { FunctionComponent } from "react";
import { useRouter } from "next/router";

const Place: FunctionComponent = () => {
    const router = useRouter();
    const { country, state, uscity } = router.query 

    return(
        <div>
            <p>Country: USA - city level</p>
            <p>State: {state}</p>
            <p>City: {uscity}</p>
        </div>
    )
}

export default Place;