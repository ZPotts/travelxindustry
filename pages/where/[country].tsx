import { FunctionComponent } from "react";
import { useRouter } from "next/router";

const Place: FunctionComponent = () => {
    const router = useRouter();
    const { country } = router.query 

    return(
        <p>Country: {country}</p>
    )
}

export default Place;