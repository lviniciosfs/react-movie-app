import { ALL_MOVIES } from "../movies";

/*
 This is an Icon that you can use to represent the stars if you like.
 Otherwise, you could use a simple ⭐️ emoji, or * character.
*/
import { StarIcon } from "@heroicons/react/24/solid";

export default function App() {
  const movies = ALL_MOVIES.items;


  const listMovies = movies.map(i => {
    return <li key={i.id}>
      Movie: {i.name}
      Rating: {[1,2,3,4,5].map(s => <StarIcon height={15} color={s <= i.rating ? 'gold': 'gray'}/>)}
    </li>
  }
    
  )

  return (
    <div className="app">
      <ul>
        {listMovies}
      </ul>
    </div>
  );
}