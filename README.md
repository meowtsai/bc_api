# bc_api
This is a simple piece of code demostrate how to write a RESTful web API with Node.js Framework.

# Quickstart

### Install
Download or git clone this project. Enter the project path and run  `npm install`.

### Run
After the package installed complete, run `node app.js`. This should launch the service on http://localhost:8000.

### API
**GET API** 
This api will return the block with its infomation the user query for.

- Open a browser, type  `http://localhost:8000/block/0` in url box, `0` in the end represents the block height you intend to query.
- You should be able to see something like ```{"hash":"49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3","height":0,"body":"First block in the chain - Genesis block","time":"1530311457","previousBlockHash":""}```

**POST API** 
This api intend to  add a new block to the chain.
- Open a terminal
- run `sudo apt install curl` if you don't already have curl tool
- run `curl -X "POST" "http://localhost:8000/block" -H 'Content-Type: application/json' -d $'{"body":"block body contents"}'`
- You will recive the new block information in json format such as ```{"hash":"9327355aa9523e3e41ffc8b9cdb566591b259fd5ed017a16450c22f4b6a2c258","height":2,"body":"block body contents","time":"1531787866","previousBlockHash":"ffaffeb2330a12397acc069791323783ef1a1c8aab17ccf2d6788cdab0360b90"}```

### License

This work dedicated using
[CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). Feel free to do
whatever you want with it.
