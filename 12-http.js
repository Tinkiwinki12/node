const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to my home page')
    }
    if(req.url==='/about'){
        res.end('Here is the short story')
    }
    // res.end(
    //     `
    //     <h1>Oops!</h1>
    //     <p>we cant find the page</p>
    //     <a href='/'>Back</a>
    //     `

    // )

})
server.listen(5000)