import React, { useReducer } from "react";
import { Category } from "../queries/items.queries";
import { Reducer } from "react";

interface categoryState {
  categoriaSeleccionada: Category
}
const initialState: categoryState = {
  categoriaSeleccionada: {
      name: "stat-boosts",
      url: 'https://pokeapi.co/api/v2/item-category/1',
      items: []
    }
};

interface action{
  type: string,
  payload: any
}
interface reducerProps{
  state: categoryState;
  action: action
}
function reducer (state: categoryState, action:action): categoryState {
  switch(action.type){
    case 'SELECCIONAR_CATEGORIA': {
      return {
        ...state, 
        categoriaSeleccionada: action.payload
      }
    }
    default:
      return initialState;
  }  
};

type categoryContext = {
  categoriasState: categoryState;
  seleccionarCategoria: (categoria: Category) => void;
}
export const ContextoCategorias = React.createContext<any>(null);

type providerProps = {
  children: JSX.Element
}
const ProviderCategorias = ({ children }: providerProps) => {
    const [categoriasState, dispatch] = useReducer(reducer, initialState);

    const seleccionarCategoria = (categoria: Category) => {
      console.log(categoria);
      
        dispatch({
            type: 'SELECCIONAR_CATEGORIA',
            payload: categoria,
        });
    };

    return (
        <ContextoCategorias.Provider
            value={{
                categoriasState,
                seleccionarCategoria,
            }}
        >
            {children}
        </ContextoCategorias.Provider>
    );
};

export default ProviderCategorias;