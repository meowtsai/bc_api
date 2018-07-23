const SHA256 = require('crypto-js/sha256');
const express = require('express')
const app = express()

class Block{
	constructor(data){
     this.hash = "",
     this.height = 0,
     this.body = data,
     this.time = 0,
     this.previousBlockHash = ""
    }
}


class BlockChain{
	constructor(data){
     this.chain = [];
     this.addBlock(new Block("First block in the chain - Genesis block"));
    }

    // Add new block
    addBlock(newBlock){
      // Block height
      newBlock.height = this.chain.length;
      // UTC timestamp
      newBlock.time = new Date().getTime().toString().slice(0,-3);
      // previous block hash
      if(this.chain.length>0){
        newBlock.previousBlockHash = this.chain[this.chain.length-1].hash;
      }
      // Block hash with SHA256 using newBlock and converting to a string
      newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
      // Adding block object to chain
      this.chain.push(newBlock);

    }
}


let bc_length = 0;
let my_chain = new BlockChain();
//app.get('/',(req, res)=>res.send('Hello World!'))

app.get('/block/:height',(req, res)=>{

  res.setHeader('Content-Type', 'application/json');
  resp = my_chain.chain[req.params.height];
  if (resp)
  {
    res.send(JSON.stringify(resp))
  }
  else {
    res.send(JSON.stringify({error:'No such blcok exists.'}))
  }

})

app.post('/block',(req, res)=>{
  let newBlock = new Block(req.params.body);
  my_chain.addBlock(newBlock);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(newBlock))

})

app.listen(8000,()=>console.log('Example app listening on port 8000!'))
