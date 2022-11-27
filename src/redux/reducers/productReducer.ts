import { AnyAction } from "redux";
import { Product } from "../../helpers/interfaces";
import { ActionTypes } from "../constans/action-types";

const initialState = {
    fetchedCategories: [''],
    fetchedProduct: [], 
    fetchedImages: [],
    selectedProducts: [{id:0}],
};

export const productReducer = (state=initialState, action: AnyAction) => {
    switch (action.type) {
        case ActionTypes.FETCH_CATEGORIES:
            return { ...state,
                fetchedCategories: action.payload
            }
        case ActionTypes.FETCH_IMAGES:
            return { ...state,
                fetchedImages: action.payload
            }
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state,
                fetchedProducts: action.payload
            }
        case ActionTypes.SET_PRODUCT:
            return { ...state,
                selectedProducts: [...state.selectedProducts, action.payload]
            }
        case ActionTypes.REMOVE_PRODUCT:    
        const indexOfObjectToRemove = state.selectedProducts.findIndex(
            (productAlreadyInState) => productAlreadyInState.id === action.payload.id
        )   
        const CopyOfOldSelectedProductsArray = [...state.selectedProducts];
        CopyOfOldSelectedProductsArray.splice(indexOfObjectToRemove,1);
        return {
            ...state,
            selectedProducts: CopyOfOldSelectedProductsArray 
        }
        default:
            return state;
    }
};


// 1. Inspirując się authReducerem, napisz productReducer
// 2. Napisz case dla FETCH_CATEGORIES:
// - w środku zwróc obiekt w którym znajdzie się kopia poprzedniego stanu, oraz nadpisz fetchedCategories danymi pozyskanymi z action.payload
// return {
//     ...state,
//     fetchedCategories: *tutaj cos*
// }
// PAMIĘTAJ O DEFAULT NA KONCU REDUCERA

// AKCJA DODANIA NOWEGO PRODUKTU

// stary stan (dostępny pod parametrem state w reducerze)
// {
//   fetchedCategories: [""],
//   fetchedProducts: [],
//   fetchedImages: [],
//   selectedProducts: [{x: 1}, {y:2}, {z:3}], //ta lista jest kopiowana
// }

// nowy stan (to co zwracamy w case)
// {
//   fetchedCategories: [""],
//   fetchedProducts: [],
//   fetchedImages: [],
//   selectedProducts: [{x: 1}, {y:2}, {z:3}, {a: 4}],
// }
// {x: 1}, {y:2}, {z:3} to state.selectedProducts potraktowane spreadem
// {a: 4} to action.payload