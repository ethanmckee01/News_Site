import React from 'react'

const Home = () => 
{
    return (
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=fd75dd4fe27d4d66a9a4e0eedea77f66')
    .then( res => res.json())
    .then(data => test.innerHTML = data.articles[0].content),
    <h3 id="test"></h3>
    )
}

export default Home