import './home.css'
import posts from '../../static/data/posts'
import { useState } from 'react'
const Home = () => {
    // Bundling the state values like this, instead of creating one for each value, cuts the number of renders, improving performance.
    const [search, setSearch] = useState({
        query: '',
        list: [],
    })

    const handleChange = (e) => {
        const results = posts.filter(post => {
            if (e.target.value === "") return posts
            return post.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setSearch({
            query: e.target.value,
            list: results
        })
    }

    return (
        <div className='' style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
            <form>
            <h1 style={{textAlign: 'center'}}>Search bar</h1>
                <input type="search" value={search.query} onChange={handleChange} />
            </form>
            <ul>
                <ul>
                    {(search.query === '' ? " " : !search.list.length ? "your search is not available" : search.list.map(post => {
                        return <li key={post.title}>{post.title}</li>
                    }))}
                </ul>
            </ul>
        </div>
    )
}

export default Home