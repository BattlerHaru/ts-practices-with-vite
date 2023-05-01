import axios from "axios";
import { PokeapiResponse } from "../interfaces/pokeapi-response.interface";

// export class Anime {
//     public episodes: number;
//     constructor(episodes: number) {
//         this.episodes = episodes;
//     }
// }

export class Anime {

    get imageUrl(): string {
        return `https://test.com/${this.id}.png`
    }

    constructor(
        public readonly id: number,
        public readonly name: string,
        public episodes: number,
    ) { }

    allData() {
        console.log(`
        Anime: ${this.name}
        Episodes: ${this.episodes}
        ${this.cover()}
        `)
    }

    private cover() {
        return `${this.imageUrl}`;
    }

    async getPokemon(pokeId: number): Promise<string> {
        const { data } = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);

        console.log(data.name)

        return data.name;
    }
}

export const onePiece = new Anime(1, "One Piece", 1057)

// onePiece.episodes += 1;
// onePiece.allData();

onePiece.getPokemon(7);