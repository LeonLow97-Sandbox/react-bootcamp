## JSON Server Setup

1. Install JSON-Server with NPM at the terminal

- `npm install json-server`

2. Create a `db.json` file where data will be stored.
3. Create a command to run JSON-Server.

```
  "scripts": {
  "start": "react-scripts start",
  "server": "json-server -p 3001 --watch db.json",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},
```

4. Run the command.
  - `npm run server`

## Standalone API Client

- Program used to make requests to an API server, specifically for development/test.
- Built into VSCode.
  `REST Client`
- Create file `api.http` to send requests.
```
GET http://localhost:3001/books HTTP/1.1
Content-Type: application/json
```

