# Estructuras de Datos en JavaScript

## ¿Qué son las estructuras de datos?

Es la forma en la que vamos a guardar y estructurar la información.

Imagina que debes guardar el monton de ropa que acaba de ser lavada, puede ser que en el mejor de los casos te la hayan dejado un poco ordenada para que tu la guardes, en el peor de los casos estara en bruto, quiere decir que te van a dar una bola de ropa y que tienes que doblarla, acomodarla y guardarla. Este es un modelo que nosotros utilizamos todo el tiempo.

Trabajar con estructuras de datos es un modelo que nos permite guardar no solo información sino que muchas otras cosas, como la ropa. Si nos toca guardar la ropa en bruto puede ser que terminemos con un conjunto muy desordenado, ya que metemos la ropa como quepa o como se pueda. Pero si llega alguien mas y tu le pides que te pase alguna prenda, esta persona no sabrá como encontrarla, si vas tu mismo es posible que tambien te cueste un poco, pero sepas donde guardaste las cosas. No quiere decir esa forma de guardar la ropa sea mala, simplemente es un estructura y muy posiblemente no sea la mejor para poder completar la tarea de encontrar una prenda.

Aquí podemos ver que existen otro tipo modelos que nos ayudan a guardar las cosas de mejor manera para así tener acceso a ellas de forma mucho mas simple. ¿Como cuales?, existen formas de organizar la ropa diferente, como por ejemplo, por color, por talla, por marca, por tipo, etc. lo cual nos da una forma de acceso mucho mas facil y no tenemos que estar buscando alguna prenda en especifico en una bola de ropa, lo cual es mucho mas complejo.

Con estas estructuras no es mucho más facil guardarla, podemos incluso hasta ahorrar espacio, en el ejemplo de la bola de ropa puede ser que hasta ocupemos más espacio del que debemos, pero si aprendemos a acomodarla y a guardarla nos vamos a dar cuenta de que posiblemente tenemos mucho mas espacio libre y que podriamos guardar mas cosas, ademas nos es mucho mas facil llegar a prendas muy especificas si las cosas estan ordenadas. Este es un ejemplo de estructuras de datos que nos ayudan a organizar la información.

![ejemplo](./img/estructuras.png)

Existen diferentes formas que nosotros tenemos para poder guardar información, cada una de estas formas nos ayuda a resolver problemas especificos, no todas son buenas para todo.

Las estructuras de datos son colecciones de valores, las relaciones entre ellos y las funciones u operaciones que se pueden aplicar a los datos.

Hay muchos lenguajes de programación que ya tienen estructuras de datos construidas, en donde tu nada mas mandas a llamar la estructura de datos, y empiezas a guardar la información, y hay otros como javascript en donde tendriamos que construirlas de cero para empezar a guardar la información. Lo importante es entender cual es la lógica de estas estructuras de datos, para poder construirlas, ya que entendemos esto cuando nos enfrentemos a algún problema vamos a poder entender que tipo de estructura de datos nos ayuda a resolver de forma muy especifica ese problema, guardando la informacion de forma diferente.

**¿Cual estructura de datos es mejor?**. Ninguna es mejor que otra, todo depende de lo que necesites hacer una se adaptará mejor que la otra para tu problema en cuestión. El objetivo es conocerlas y atacar el problema con la estructura que mejor se adapte.

## Memoria y cómo se guardan los datos

![memoria](https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202020-12-23%20a%20la%28s%29%2018.37.17-35f73152-b84f-42a1-815f-a954b5f322ce.jpg)

![unidades de medida](https://static.platzi.com/media/user_upload/3-Almacenamiento-263a8ffc-fc6f-4ac3-99b8-a112f0f9d008.jpg)

## Arrays

![arrays](https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202020-12-23%20a%20la%28s%29%2018.54.55-92ed2a3b-7382-4a68-807c-4a4e96bafd4d.jpg)

![arrays estaticos](https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202020-12-23%20a%20la%28s%29%2018.55.38-9a12566d-ccc8-4f22-aa0b-fe5cb8ca8148.jpg)

## Strings

Los Strings per se no son una estructura de datos, pero la forma en la que se guardan en memoria es como una estructura de datos.

- **String inmutable** se refiere a que una vez definido no lo podemos cambiar.

```javascript
const saludo = "Hola";
```

- Cabe recalcar que en muchos lenguajes incluyendo JavaScript, los strings son inmutables
  - para generar un cambio en el string sera necesario:
    1. Tomar Todos los datos de los memory slots.
    2. Buscar nuevos memory slots.
    3. Pegar en los memory slots necesarios con los nuevos elementos.
  - Hacer todos estos pasos puede llegar a ser un problema de performance.
- Cuando generamos strings en JavaScript casi nunca tenemos que modificarlos.
- Los strings se guardan como un array de memory slots.

![ejemplo](https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0026-887fd846-664a-4beb-ba3b-07df1309ebbf.jpg)

- Teniendo acceso a cada letra dela cadena definida.

Los strings son inmutables, es decir que una vez definidos no podemos cambiar "letra por letra" sino que tendremos que tomar todos lo items y comenzar a realizar la operación deseada, esto tambien significa mayor esfuerzo de computo.