
## Github Repository Search
This a react app to search github repositories. The app allows the user to bookmark repositories.<br>
Bookmarked repositories are stored on the user's session. This is done on a node.js server running express.

To run the project properly you must first build the client side.<br>
To build the react app, from the root directory navigate to `client/` 
### `npm run build`

After that, navigate to the `server/` directory and run the following command:
### `node server.js`

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

#### Note
To reset the session's bookmarked repos open [http://localhost:5000/bookmarks/reset](http://localhost:5000/bookmarks/reset)
