import { AnyAction } from "redux";
import { ActionTypes } from "../constans/action-types";

const initialState = {
    fetchedCategories: [''],
    fetchedProduct: [], 
    fetchedImages: [],
    selectedProducts: [],
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