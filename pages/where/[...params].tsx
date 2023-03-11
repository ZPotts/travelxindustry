import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";

import getWeather from '../../api/weather'

import { getCityBySlug } from '../../data/cities';

const Place: FunctionComponent = () => {
    const router = useRouter();
    let params = [];
    const [isLoading, setIsLoading] = useState(true);
    const [place, setPlace] = useState<any[]>([]);

    useEffect(() => {
        if(!router.isReady) return;
        console.log('router');
        console.log(router);
        
        let { params = [] } = router.query;
        const { asPath } = router;
        console.log(typeof(asPath));

        setIsLoading(false);
        setPlace(getCityBySlug(asPath))
        
    }, [router.isReady]);

    console.log('returned place');
    console.log(place);

    if(isLoading){
        return(
            <p>Loading...</p>
        )
    } else {
        return(
            <div className="panel">
                <p>Where are we?</p>
                <p>{place[0].city}</p>
                <p>Lat: {place[0].lat}</p>
                <p>Lng: {place[0].lng}</p>
                <p>{getWeather()}</p>
            </div>
        )
    }
}

export default Place;