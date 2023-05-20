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
