import { FunctionComponent } from "react";
import { useRouter } from "next/router";

const Place: FunctionComponent = () => {
    const router = useRouter();
    const { country, city } = router.query 

    return(
        <div>
            <p>Country: {country}</p>
            <p>City: {city}</p>
        </div>
    )
}

export default Place;