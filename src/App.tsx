import './App.css'
import { usePokemons } from '../hooks/usePokemons'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import SelectPokemon from '../components/selectPokemon'
import DataList from '../components/DataList'
import CheckDataStale from '../components/checkDataStale'


function App() {
  // Step 1: Define a type for the valid statuses
  const PokeStatus = useSelector((state: RootState) => state.pokeState.characterStatus)
  const { data, isError, isPending, isStale, refetch } = usePokemons(PokeStatus);

  if (isError) {
    return <h1>Failed to get pokemons</h1>
  }

  if (isPending) {
    return <h1>Loading pokemons....</h1>
  }

  return (


    <div className=' flex flex-col items-center justify-center gap-10'>
      <div className='flex items-center justify-center flex-col gap-4 '>
        <CheckDataStale isStale={isStale} refetch={refetch} />
        <SelectPokemon />
      </div>
      <div className='flex gap-10 items-center justify-center w-[80%] flex-wrap ' >
        <DataList data={data} />
      </div>


    </div>

  )
}

export default App;
