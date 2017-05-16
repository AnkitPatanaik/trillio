# trillio-api

Directions to run

1. Install Homebrew ([link](https://brew.sh/))
2. Install MongoDB 
	
	```
	brew install mongodb
	```
3. Install Node dependencies 

	```javascript
	brew install node //if you don't have node installed already
	npm install
	```
4. Start MongoDB server
	
	```
	brew services start mongodb
	```
5. Start node server

	```
	node app.js
	```
6. Server is now running on: localhost:3000
7. When done, turn off Mongodb server to prevent issues when using in the future 
	
	```
	brew services stop mongodb
	```
