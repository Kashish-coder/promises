const pro=new Promise(function(resolve,reject){
setTimeout(function()
 {
 console.log("complete");
 resolve()  //to connect then function
},3000) 
})
pro.then(function(){
  console.log("promise consumed");
})

//promise2
new Promise(function(resolve,reject){
  setTimeout(function()
   {
   resolve(
    {username:"chai",email:"chai@gmail.com"}
   )  //to connect then function
  },1000) 
  })
  .then(function(user){
    console.log(user);
  }) 


  //promise 3
  new Promise(function(resolve,reject){
    setTimeout(function()
     {
    let error=false
    if(!error){
      resolve({
        username:"chai",email:"chai@gmail.com"
      })}
      else
      reject("errorrrrrrrrrr")
    },1000) 
    })
    .then((user)=>{
      console.log(user);
      return user.username
    })
    .then((username)=>{
console.log(username);
    })
    .catch(function(error){
      console.log(error);
    })
    .finally(()=>{
      console.log("resolved")
    })

    /*//promise 5
    new Promise(function(resolve,reject){
      setTimeout(function()
       {
      let error=true
      if(!error){
        resolve({
          username:"Kashish", password:"pass"
        })}
        else
        reject("errorrrrrrrrrr")
      },1000) 
      })

      async function p(){
       try{
        const resp= await p
       console.log(resp)
       }
       catch(error){
       console.log(error);
      }}
      p() */

      async function getallusers(){
        try{
          const respo=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await respo.json()
        console.log(data);
        }
        catch(error){
          console.log("E",error);        }
      }
      getallusers()  //ORR

      fetch('https://jsonplaceholder.typicode.com/users')
      .then((respo)=>{
      return respo.json()})
      .then((data)=>
      {
        console.log(data);
      })
