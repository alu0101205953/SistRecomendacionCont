# Sistemas de Recomendación Basados en Contenido
## - Descripción del código desarrollado

Este código ha sido desarrollado empleando Javascript y HTML. En primer lugar, en el fichero _index.html_ se encuentra el código con la estructura principal de la página y un botón que activa el manejador de eventos que realiza los cálculos pertinentes.

En cuanto al código Javascript, en primer lugar encontramos dos funciones asociadas al botón que permite abrir un archivo y procesar el texto del mismo, construyendo un array sobre el que se trabajará con las siguientes funciones.

![Funcion 1](https://i.imgur.com/XZE8Yzr.png)
![Funcion 2](https://i.imgur.com/v4igzpO.png)

Cabe destacar que, ya que Javascript no permite acceder a los ficheros locales a menos que el usuario seleccione el fichero en cuestión, fue necesario incluir las palabras de parada como una constante en el código.

A continuación, la función principal del programa, será la encargada de llamar a las distintas funciones que permiten procesar el texto para extraer los términos relevantes y obtener la freuencia de cada término, la frecuencia inversa, calcular el TF-IDF y mostrar todos los resultados al usuario en forma de tabla:

![Función 3](https://i.imgur.com/VTNt9eQ.png)

En primer lugar se procesa el texto leído del archivo, eliminando puntos y comas, y se genera un vector con todos los términos que tiene cada documento, cambiando mayúsculas por minúsculas en los casos que sea necesario.

A continuación se genera un vector con todos los términos relevantes, es decir, obviando las palabras de parada, de todos los documentos, que será útil para hacer operaciones más adelante.

![Función 4](https://i.imgur.com/bM5B9dY.png)

Se hacen llamadas a las funciones específicas para cada uno de los cálculos que se van a realizar:

**TF**

Esta función recibe como parámetros el vector de términos mencionado anteriormente y un documento, y cuenta el número de apariciones de cada término en ese documento. Devuelve un array de t-uplas, donde cada una de ellas contiene un término y la frecuencia del mismo, siempre en el caso de que no sea 0.

![Función 5](https://imgur.com/d7MBmrV.png)

**IDF**

Esta función recibe el vector de términos relevantes del corpus de documentos y el listado de términos de cada uno de los documentos, y cuenta el número de documentos que contienen cada término, calculando el IDF con el logaritmo en base 10 del cociente entre el nº de documentos del corpus y el nº de documentos que contiene el término. Devuelve un array de t-uplas, donde cada una de ellas contiene un término y la frecuencia inversa del mismo.

![Función 6](https://imgur.com/Fd4y0yt.png)

**TF-IDF**

Esta función recibe los vectores de frecuencias anteriormente calculados y contruye uno nuevo con el producto de frecuencias. Devuelve un vector de t-uplas donde cada una de ellas contiene el término en cuestión y la frecuencia asociada.

![Función 6](https://imgur.com/gRDxAnN.png)

**Similitud coseno ajustada**

Toma como parámetros dos documentos y en primer lugar guarda los términos comunes a ambos en un vector. A continuación emplea varios acumuladores para aplicar la fórmula, haciendo uso también de una función auxiliar para calcular la media de frecuencias de un documento.


Por último construye las tablas de resultados que se van a mostrar en la página

## - Ejemplo de uso

Para hacer uso del programa basta con seleccionar un archivo de texto plano donde cada línea del mismo corresponda a un documento. Al pulsar el botón se mostrarán los resultados calculados.

![Ejemplo](https://imgur.com/0Nb4cK0.png)
