# Redux Toolkit Query

- Modern Async
- Handles almost all aspects of making requests.
- Fined-grained loading state.
- Fined-grained error state.
- Data caching and refetching.
- File location:
    - ~/media/src/store/apis/albumsApi.js

```js
import { createApi } from '@reduxjs/toolkit/query/react';

const albumsApi = createApi({
    endpoints(builder) {
        return {
            fetchAlbums:    ,

            addAlbum:   ,

            removeAlbum:    ,
        }
    }
})

// Automatically generated hooks
useFetchAlbumsQuery
useAddAlbumMutation
useRemoveAlbumMutation
```

## Creating a RTK Query API

1. Identify a group of related requests that your app needs to make
2. Make a new file that will create the api
3. The API needs to store a ton of state related to data, request status, errors. Add a `reducerPath`
    - `reducerPath`: Property on the big state object where all of the API state should be maintained. Find the 'key' that stores the state.
4. The API needs to know how and where to send requests.
    - `fetchBaseQuery`: Function to make a pre-configured version of 'fetch'. Add a `baseQuery`.
    - RTK uses `fetch`.
5. Add `endpoints`, one for each kind of request you want to make. Reqs that read data are *queries*, write data are *mutations*.

# Hook in RTK Query

- **Queries** run immediately when the component is displayed on the screen (by default).
- `const result = useFetchAlbumsQuery(user)`
    - `data`: Data returned from the server.
    - `error`: Error, if one occurred.
    - `isLoading`: True if currently loading data for the **first time only**
    - `isFetching`: True if currently loading data
    - `refetch`: Function tell the query to return

# Hook in RTK Mutation

- **Mutations** give you a function to run when you want to *change some data*.
- `const [addAlbum, results] = useAddAlbumMutation()`
    - `addAlbum`: function called to execute mutation.
    - `results`: object returned from the mutation.

## Options for Handling Updates Data

1. Take the newly-created album from the response and add it into our list of albums.
    - Only 1 request!
    - All code becomes more complicated.
    - Response might not contain the needed data.
2. After creating a new album, make a second request to get all albums. (recommended)
    - Easier to picture data flow in the app
    - 2 requests!
    - Automatic data refetching is implemented using the "tag" system.
        - Tag system is used to mark certain queries as being out of state after specific mutations are executed.
    - Tags are easier if you first understand how RTKQ tracks requests.
    - RTK can de-duplicate requests.
        - Redux checks if there is a pending request with the same endpoint in the store.
