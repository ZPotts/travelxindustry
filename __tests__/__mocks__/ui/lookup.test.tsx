import { render, screen } from '@testing-library/react';
import SearchBar from '@/components/search/searchBar'
 

/* search returns the values we want */
test("search returns the right values", async () => {
    render(<SearchBar />)
}

/* search goes to Google if not found locally */

/* search fails as expected */