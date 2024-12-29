let btn = document.getElementById("quote_btn")
btn.addEventListener("click",()=>{
   let fetchingData=async()=>{
    let data = await fetch("https://dummyjson.com/quotes/random")
    let quote_obj = await data.json()
    let quote = quote_obj.quote
    let auth = quote_obj.author
    let text = document.getElementById("text")
    let author = document.getElementById("author")
    text.innerHTML=` "${quote}"`
    author.innerHTML=`-${auth}`
    
}
fetchingData()
})