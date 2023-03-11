import React from "react";

import styles from '@/styles/searchResults.module.css'

function SearchResults (props){
    console.log('props:') 
    console.log(props)

    let returnList = props.where;
    returnList.length = 20;
    console.log('returnList')
    console.log(returnList);

    return(
        <div className={styles.resultsList}>
            {returnList.map(place => (
                <div key={place.slug}>
                    <li><a href={`/where/${place.slug}`}>
                        {place.cityName}
                        ,&nbsp;
                        {place.countryName === 'United States' ? `${place.a2Name}, US` : place.countryName }
                    </a></li>
                </div>
            ))}
        </div>
    )
}

export default SearchResults;