import { createSlice } from '@reduxjs/toolkit';
import { TotalCardsArr } from '../data/TotalCards';

import FilterStatusCard from '../common/statusCard';


export const useCard = createSlice({
    name: "useCard",
    initialState: {
        TotalCards: TotalCardsArr,
        History: [],
        step: 0,
        player: 1,
        players: [13, 13, 13, 13],
        offer: {
            status: "nothing",
            arr: []
        }

    },
    reducers: {
        back: (state, action) => {
            state.TotalCards = state.History[state.step - 2].arr;
            state.players = state.History[state.step - 2].players;
            state.step = state.step - 1;
        },
        goStep: (state, action) => {
            state.TotalCards = state.History[action.payload - 1].arr
            state.players = state.History[action.payload - 1].players;
            state.step = action.payload
        },
        next: (state, action) => {
            state.TotalCards = state.History[state.step].arr;
            state.players = state.History[state.step].players;
            state.step = state.step + 1;
        },
        reset: (state, action) => {
            state.TotalCards = TotalCardsArr;
            state.History = [];
            state.step = 0;
            state.player = 1;
            state.players = [13, 13, 13, 13];
        },
        handlePlayer: (state, action) => {
            state.player = action.payload;
        },
        resetOffer: (state, action) => {
            state.offer = {
                status: "nothing",
                arr: []
            }
        },
        deleteCard: (state, action) => {
            const Players = [...state.players];
            Players[action.payload.player - 1] = Players[action.payload.player - 1] - action.payload.value.length;

            let ArrNew = [...state.TotalCards];
            state.step = state.History.length + 1;
            state.players = [...Players];
            state.History = [...state.History, {
                title: action.payload.desc,
                arr: state.TotalCards,
                step: state.History.length + 1,
                players: state.players
            }]
            state.offer = {
                status: FilterStatusCard(action.payload.value),
                arr: action.payload.value
            }

            action.payload.value.forEach(elemt => {
                ArrNew = ArrNew.map((item) => {
                    return item.name === elemt ?
                        { ...item, amount: item.amount - 1 } :
                        { ...item }
                })
            })
            state.TotalCards = ArrNew;
        },
    }
})
export const {
    back, next, reset, deleteCard, goStep, handlePlayer, resetOffer
} =
    useCard.actions;
export default useCard.reducer;