import axios from 'axios';
import './App.css';
import { useEffect , useState } from 'react';
import Users from './components/Users';
import Posts from './components/Posts';

function App() {
const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setPosts(response.data)
      console.log(posts)
    }).catch(
      (error) => {
        console.log(error)  
      }
    )
  }, [])
  return (
    <>
      {/* {posts.map((data , i) => {
        return(
          <Posts key={i} data={data} />
        )
      })} */}
      <Users />
    </>
  );
}

export default App;
