import { FunctionComponent } from "react";
import { useRouter } from "next/router";

const Place: FunctionComponent = () => {
    const router = useRouter();
    const { country, state } = router.query 

    return(
        <div>
            <p>Country: United States - state level</p>
            <p>City: {state}</p>
        </div>
    )
}

export default Place;