import { PokeType } from '../types/poketypes'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DataList = ({ data }: { data: any }) => {
    return (

        <>
            {data.results.map((pokemon: PokeType) => {
                return (
                    <div className='' key={pokemon.name}>
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <span>{pokemon.status}</span>
                    </div>
                )
            })}
        </>
    )
}

export default DataList