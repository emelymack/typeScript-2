# Ejercicio Integración TypeScript

## Objetivo
Vamos a convertir la aplicación de inventario Pokémon realizada en JavaScript a TypeScript, para mejorar la robustez del código y facilitar su escalabilidad.

## Consigna
Partiendo del siguiente código realizado mayoritariamente en TypeScript, vamos a tener que completar la transformación de los archivos de JavaScript utilizando los tipos correctos.
Te proponemos resolver los siguientes puntos: 
- Para iniciar, deberíamos convertir todos los archivos que aún quedan con extensión .js a .ts y los archivos .jsx a .tsx.
- Tipificar el objeto itemCategory retornado por las funciones getItemCategories y getItemCategory.
- Mostrar el listado de los itemCategories devueltos por la API que ya está implementada en el código utilizando el componente ListadoCategoriasItem.
- Tipificar las props del componente ListadoCategoriasItem.
- Finalizar la implementación de la API de Context de React para compartir la información con la pantalla de - VistaCategoria. Para ello deberemos crear la función reductora, implementar la action SELECCIONAR_CATEGORIA y llamar a la función del contexto en nuestro ListadoCategorias.
- Mantener la aplicación funcionando correctamente, sin errores y con TypeScript.

### Bonus track
¿Se animan a llamar a la API individual de items para obtener las imágenes de cada uno? Te dejamos el endpoint necesario: https://pokeapi.co/api/v2/item/{id o name del item}.



To learn React, check out the [React documentation](https://reactjs.org/).
