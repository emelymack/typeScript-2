import React, { useContext } from "react";
import {useQuery} from "react-query";
import { ContextoCategorias } from "../context/ContextoCategorias";
import {getItemCategories} from "../queries/items.queries";
import ListadoCategoriasItem from "./ListadoCategoriasItem";

const ListadoCategorias = () => {
  const {seleccionarCategoria}  = useContext(ContextoCategorias);
    const {
        data: categorias,
        isLoading,
        isError,
    } = useQuery("itemCategories", getItemCategories);

    if (isLoading) return <div>Cargando categorias...</div>
    if (isError) return <div>No se pudo cargar categorias...</div>
console.log(categorias);

    return (
        <div id="listadoCategorias">
          {categorias.map((elem) => {
            return <ListadoCategoriasItem categoria={elem} seleccionarCategoria={seleccionarCategoria} />
          })}
        </div>
    );
}

export default ListadoCategorias;
