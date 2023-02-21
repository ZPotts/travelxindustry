import { FunctionComponent } from "react";
import { useRouter } from "next/router";

const Place: FunctionComponent = () => {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log(params)

    if (params.length === 3 && params[0] === 'united-states') {
        return(
            <div>
                <p>US city page</p>
                <p>country: {params[0]}</p>
                <p>state: {params[1]}</p>
                <p>city: {params[0]}</p>
            </div>
        )
    } else if (params.length === 2 && params[0] != 'united-states') {
        return(
            <div>
            <p>country: {params[0]}</p>
            <p>city: {params[1]}</p>
            </div>
        )
    } else if (params.length === 2 && params[0] === 'united-states') {
        return(
            <div>
            <p>country: {params[0]}</p>
            <p>state: {params[1]}</p>
            </div>
        )
    }  
    else if (params.length === 1) {
        return(
            <p>Country page: {params[0]}</p>
        )
    }
    return(
        <p>Country Page</p>
    )
}

export default Place;