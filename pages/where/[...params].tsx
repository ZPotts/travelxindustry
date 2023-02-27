import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { getCityBySlug } from '../../data/cities';

const Place: FunctionComponent = () => {
    const router = useRouter();

    const { params = [] } = router.query;
    const path = router.pathname;
    console.log(path);

    console.log('Path:');
    console.log(router.asPath);

    const theCity = getCityBySlug("thailand/bangkok");
    console.log('city data');
    console.log(theCity);
    
    /* Get US City */
    if (params.length === 3 && params[0] === 'united-states') {
        return(
            <div>
                <p>US city page</p>
                <p>country: {params[0]}</p>
                <p>state: {params[1]}</p>
                <p>city: {params[0]}</p>
            </div>
        )
    } 
    /* Get global city */
    else if (params.length === 2 && params[0] != 'united-states') {
        return(
            <div>
                <p>country: {params[0]}</p>
                <p>city: {params[1]}</p>
                <p>City from data: </p>
            </div>
        )
    } 
    
    /* Get US State */
    else if (params.length === 2 && params[0] === 'united-states') {
        return(
            <div>
            <p>country: {params[0]}</p>
            <p>state: {params[1]}</p>
            </div>
        )
    }  

    /* Get Country */
    else if (params.length === 1) {
        return(
            <p>Country page: {params[0]}</p>
        )
    }

    /* Nothing's working at all */
    return(
        <p>Not found Page</p>
    )
}

export default Place;