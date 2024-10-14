import { useQuery } from "@tanstack/react-query";
import { PokeStatusType } from "../types/poketypes";

// Step 2: Use this type in the state

export const usePokemons = (status: PokeStatusType) => {
  return useQuery({
    queryKey: ["pokemons", status],
    queryFn: async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=rick&status=${status}`
      );
      if (!response.ok) {
        throw new Error("failed to get pokemons");
      }
      return response.json();
    },
    staleTime: 5000,
  });
};
