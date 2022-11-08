import { TotalCardsArr } from "../data/TotalCards";


export const filterCardBig = (arr) => {
    return arr.slice(arr.length - 4, arr.length - 1);
}

export const filterCardSmall = (arr) => {
    return arr.slice(0, arr.length - 4);
}

// Lọc sảnh 

export const filterLobbyCards = (number, TotalCards) => {
    const ResultLobby = [];
    let indexSkip = 0;
    const numberFor = TotalCards.length - number;
    //  trừ con 2 và quét hết
    for (let i = 0; i < numberFor; i++) {
        const index = i;
        const indexPlus = i + 1;
        if ((indexPlus + number < indexSkip || indexPlus < indexSkip) && !!indexSkip) break;
        const CardsSlice = TotalCards.slice(index, index + number);
        if (CardsSlice.every(currentValue => !!currentValue.amount)) {
            ResultLobby.push({
                to: CardsSlice[0].name,
                end: CardsSlice[CardsSlice.length - 1].name,
                amount: CardsSlice.reduce((a, b) => a > b.amount ? b.amount : a, 5)
            })
        }
    }
    return ResultLobby;
}
// lọc 3 đôi thông 

export const filterConsecutivePairsCards = (number, TotalCards) => {
    const ResultConsecutivePairs = [];
    const numberFor = TotalCards.length - number;
    //  trừ con 2 và quét hết
    for (let i = 0; i < numberFor; i++) {
        const index = i;
        const CardsSlice = TotalCards.slice(index, index + number);
        if (CardsSlice.every(currentValue => currentValue.amount >= 2)) {
            ResultConsecutivePairs.push({
                to: CardsSlice[0].name,
                end: CardsSlice[CardsSlice.length - 1].name,
                amount: Math.ceil(CardsSlice.reduce((a, b) => a > b.amount ? b.amount : a, 5) / 2)
            })
        }
    }
    return ResultConsecutivePairs;
}



//  Lọc tứ quý 

export const filterFourOfAKind = (TotalCards) => {
    return TotalCards.filter(item => item.amount === 4);
}

// Lọc chọn sảnh 

export const GetCardStt = (to, end) => {
    return TotalCardsArr.slice(to, end);
}

// lọc chọn 3 đôi thông

export const filterChooseConsecutivePairs = (TotalCards, stt) => {
    if (!TotalCards[stt].amount) return [];
    const CardsSlice = TotalCards.slice(0, TotalCards.length - 1);
    const CardsFilter = CardsSlice.filter(item => item.stt > stt + 1);
    return CardsFilter.filter(item => GetCardStt(stt - 1, item.stt).every(currentValue => currentValue.amount >= 2
        && currentValue.stt - stt + 1 <= 6
    ));
}
// lọc chọn  đôi thông theo số lượng 

export const filterChooseConsecutivePairsNumber = (TotalCards, number, arrUpStt) => {
    const CPCResult = [];
    arrUpStt.forEach(item => {
        const { stt } = item;
        const TotalCardsLobbyCard = [...TotalCards].slice(0, TotalCards.length - 1);
        if (TotalCards[stt - 1].amount < 2) return;
        const CardsSlice = TotalCardsLobbyCard.slice(stt - 1, stt - 1 + number);
        if (CardsSlice.length !== number) return;
        if (CardsSlice.every(currentValue => currentValue.amount >= 2)) {
            const ArrNew = GetCardStt(CardsSlice[0].stt - 1, CardsSlice[CardsSlice.length - 1].stt).reduce(
                (a, b) => [...a, b.name],
                []
            );
            CPCResult.push({
                name: CardsSlice[CardsSlice.length - 1].name,
                desc: `đôi thông ${CardsSlice[0].name} đến ${CardsSlice[CardsSlice.length - 1].name}`,
                arr: [...ArrNew, ...ArrNew]
            })
        }
    })
    return CPCResult;
}

// lọc chọn sảnh 

export const filterChooseLobby = (TotalCards, stt) => {
    if (!TotalCards[stt].amount) return [];
    const CardsSlice = TotalCards.slice(0, TotalCards.length - 1);
    const CardsFilter = CardsSlice.filter(item => item.stt > stt + 1);
    return CardsFilter.filter(item => GetCardStt(stt - 1, item.stt).every(currentValue => !!currentValue.amount));
}

export const deleteCard = (nameCard) => {
    TotalCardsArr = TotalCardsArr.map((item) => {
        return item.name === nameCard ?
            { ...item, amount: item.amount - 1 } :
            { ...item }
    })
    // History vào mảng . lúc cần thiết thì back . 
}


// 

//  Đề xuất bài 


export const offerCard = (TotalCards, offer) => {
    if (!offer.arr.length) {
        return [];
    }
    const index = TotalCardsArr.findIndex((item) => item.name === offer.arr[0]);
    const { stt } = TotalCardsArr[index];
    const arrLength = offer.arr.length;
    const arrLengthCPC = offer.arr.length / 2;
    const arrUpStt = TotalCardsArr.filter(item => item.stt >= stt);
    switch (offer.status) {
        case "single":
        case "towCard":
        case "threeCard":
            const Cards = [];
            TotalCards.forEach(item => {
                if (item.amount >= arrLength && stt <= item.stt) {
                    Cards.push({
                        name: item.name,
                        desc: arrLength + ` Lá ${item.name}`,
                        arr: Array.from(new Array(arrLength)).reduce((a, b) => [...a, item.name], [])
                    })
                }
            })
            return Cards;
        case "lobbyCard":
            const lobbyResult = [];
            arrUpStt.forEach(item => {
                const { stt } = item;
                const TotalCardsLobbyCard = [...TotalCards].slice(0, TotalCards.length - 1);
                if (!TotalCards[stt - 1].amount) return;
                const CardsSlice = TotalCardsLobbyCard.slice(stt - 1, stt - 1 + arrLength);
                if (CardsSlice.length !== arrLength) return;
                if (CardsSlice.every(currentValue => !!currentValue.amount)) {
                    lobbyResult.push({
                        name: CardsSlice[CardsSlice.length - 1].name,
                        desc: `Sảnh ${CardsSlice[0].name} đến ${CardsSlice[CardsSlice.length - 1].name}`,
                        arr: GetCardStt(CardsSlice[0].stt - 1, CardsSlice[CardsSlice.length - 1].stt).reduce(
                            (a, b) => [...a, b.name],
                            []
                        )
                    })
                }
            })
            return lobbyResult;
        case "CPC":
            let CPCResult = [];
            CPCResult = [...CPCResult, ...filterChooseConsecutivePairsNumber(TotalCards, arrLengthCPC, arrUpStt)]
            filterFourOfAKind(TotalCards).forEach(item => {
                CPCResult.push({
                    name: item.name,
                    desc: `4 lá ${item.name}`,
                    arr: Array.from(new Array(4)).reduce((a, b) => [...a, item.name], [])
                })
            });
            CPCResult = [...CPCResult,
            ...filterChooseConsecutivePairsNumber(TotalCards, 4, TotalCardsArr),
            ...filterChooseConsecutivePairsNumber(TotalCards, 5, TotalCardsArr),
            ...filterChooseConsecutivePairsNumber(TotalCards, 6, TotalCardsArr)]
            return CPCResult;
        case "fourCard":
            let fourResult = [];
            filterFourOfAKind(TotalCards).forEach(item => {
                if (stt <= item.stt) {
                    fourResult.push({
                        name: item.name,
                        desc: `4 lá ${item.name}`,
                        arr: Array.from(new Array(4)).reduce((a, b) => [...a, item.name], [])
                    })
                }
            });
            fourResult = [...fourResult,
            ...filterChooseConsecutivePairsNumber(TotalCards, 4, TotalCardsArr),
            ...filterChooseConsecutivePairsNumber(TotalCards, 5, TotalCardsArr),
            ...filterChooseConsecutivePairsNumber(TotalCards, 6, TotalCardsArr)]
            return fourResult;
        default:
            let Result = [];
            Result = [...Result, filterChooseConsecutivePairsNumber(TotalCards, arrLengthCPC, arrUpStt)]
            for (let i = arrLengthCPC + 1; i <= 6; i++) {
                Result = [...Result, filterChooseConsecutivePairsNumber(TotalCards, i, TotalCardsArr)]
            }
            return TotalCards
        // code block
    }
}