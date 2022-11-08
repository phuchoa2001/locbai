import { TotalCardsArr } from "../data/TotalCards";

const FilterLobby = (arr) => {
    const ArrFilter = arr.filter((item, index, arr) => {
        const i = TotalCardsArr.findIndex(item2 => item2.name === item);
        const indexBack = arr[index - 1];
        const itemNumber = TotalCardsArr[i - 1]?.name;
        return index === 0 || indexBack === itemNumber;
    })
    return ArrFilter.length === arr.length;
}

const FilterStatusCard = (arr) => {
    switch (arr.length) {
        case 1:
            return "single"

        case 2:
            return "towCard"

        default:
            if (FilterLobby(arr)) {
                return "lobbyCard"
            }
            if (arr.length === 3) {
                return "threeCard";
            }
            if (arr.length === 4) {
                return "fourCard"
            }
            if (arr.length === 8) {
                return "CPC4"
            }
            if (arr.length === 10) {
                return "CPC5"
            }
            if (arr.length === 12) {
                return "CPC6"
            }
            return "CPC"
    }
}

export default FilterStatusCard;