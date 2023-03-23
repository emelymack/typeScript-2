import React from "react";
import PropTypes from "prop-types";
import { Category } from "../queries/items.queries";

/**
 * @description En esta función extraemos el id de categoria de la url
 * @param {string} url recibe el estado inicial
 * @returns {string} retorna el id a partir de la url recortada
 */
export const extractCategoriaId: (url: string) => string = (url) => {
    return url.split("item-category")[1]?.replaceAll("/","")
}


/**
 * @description En esta función devolvemos el elemento JSX q representa cada item de categoria
 * @param {Category} categoria objeto categoria
 * @param {seleccionarCategoriaCallback} seleccionarCategoria
 * @returns {string} retorna el id a partir de la url recortada
 */
const ListadoCategoriasItem: ({ categoria, seleccionarCategoria }: {
  categoria: Category;
  seleccionarCategoria: Function;
}) => JSX.Element = ({ categoria, seleccionarCategoria }) => (
    <div onClick={() => seleccionarCategoria(categoria)}>
        <strong>{categoria.name}</strong>
        <small> {categoria.url}</small>
    </div>
  )


export default ListadoCategoriasItem;
