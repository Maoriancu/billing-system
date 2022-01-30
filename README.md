# billing-system

Since this project will hold both the client application and the server application there will be node modules in two different places. First run npm install from the server and then run npm install from the client.

File structure
client - Holds the client application
public - This holds all of our static files
src
Component - This folder holds all of the different components that will make up our views
Service - This folder holds a file which have all of the api methods.
App.js - This is what renders all of our browser routes and different views
index.js - This is what renders the react app by rendering App.js, should not change
package.json - Defines npm behaviors and packages for the client
server - Holds the server application
lib - This folder holds the files which will help us in the server.
models - This holds all of our data models
routes - This holds all of our HTTP to URL path associations for each unique url
index.js - Defines npm behaviors and packages for the client
package.json - Defines npm behaviors like the scripts defined in the next section of the README
.gitignore - Tells git which files to ignore
README - This file!
Available Scripts
In the project directory, you can run:

npm start - in the server side
Runs the server app in development mode.

npm start - in the client side
Runs just the client app in development mode.
Open http://localhost:3000 to view the client in the browser.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
