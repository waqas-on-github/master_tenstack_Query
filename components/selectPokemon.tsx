
import { setCharacterStatus } from '../slices/pokeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { PokeStatusType } from "../types/poketypes";


const SelectPokemon = () => {
    const dispatch = useDispatch()
    const PokeStatus = useSelector((state: RootState) => state.pokeState.characterStatus)




    return (
        <>
            <select
                onChange={(e) => {
                    e.preventDefault();
                    dispatch(setCharacterStatus({ characterStatus: e.target.value as PokeStatusType })) // Send an object with characterStatus
                }}
                value={PokeStatus}
            >
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
        </>
    )
}

export default SelectPokemon