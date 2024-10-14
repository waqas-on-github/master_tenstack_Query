export type PokeStatusType = "alive" | "dead" | "unknown";

export type PokeType = {
  name: string;
  image: string;
  status: PokeStatusType;
};
