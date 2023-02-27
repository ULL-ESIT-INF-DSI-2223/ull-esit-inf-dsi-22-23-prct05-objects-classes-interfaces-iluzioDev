# Práctica 5 - Objetos, clases e interfaces

En esta práctica vamos a aprender y profundizar el uso de objetos, clases e interfaces en Typescript, Para ello, vamos a realizar los ejercicios de programación detallados más adelante.

## Tareas Previas

- Aceptar la [asignación de Github Classroom](https://classroom.github.com/a/YCQNulZm) de esta misma tarea.
- Empezar a investigar sobre [los principios SOLID](https://samueleresca.net/solid-principles-using-typescript/) de programación orientada a objetos. Desde esta práctica nos adaptaremos a dichos principios.
- Instalar y aprender el uso y funcionamiento de las herramientas de generación de informes sobre cubrimiento de código, [Coveralls](https://coveralls.io/) y [Instanbul](https://istanbul.js.org/). A partir de esta práctica, utilizaremos estas herramientas para cualquier proyecto.

> **\*Nota:** Recordar que para el uso gratuito de **Coveralls** los repositorios deberán ser públicos, en nuestro caso el repositorio se hará público una vez se entregue la práctica.

- Instalar el paquete `prompt-sync` para lectura desde entrada estándar. Para instalarlo basta con ejecutar el comando `npm i prompt-sync`, junto a sus tipos con `npm i -D @types/prompt-sync`.

**Ejemplo de uso:**

```typescript
import * as Prompt from "prompt-sync";

const prompt = Prompt();
const myNumber = parseInt(prompt("Introduce a number: "));
console.log(myNumber);
```

## Principios SOLID

1. Principio de <ins>**Responsabilida Única**</ins>: una clase debe tener una, y solo una, razón para cambiar.
2. Principio de <ins>**Abierto/Cerrado**</ins>: Deberías ser capaz de extender el comportamiento de una clase, sin modificarla. Es decir, que sean abiertas a extender su funcionamiento, pero cerradas a modificaciones.
3. Principio de <ins>**Sustitución de Liskov**</ins>: las clases derivadas deben poder sustituirse por sus clases base.
4. Principio de <ins>**Segregación de la Interfaz**</ins>: Haz interfaces que sean específicas para una finalidad concreta. Es mejor hacer tener muchas interfaces que definan pocos métodos, que tener una interfaz con demasiados.
5. Principio de <ins>**Inversión de Dependencias**</ins>: Depende de abstracciones, no de clases concretas. Consiste en reducir las dependencias entre los módulos del código, es decir, alcanzar un bajo acoplamiento de las clases.

## Ejercicio 1 - Biblioteca musical

Diseñe el conjunto de clases e interfaces necesarias para almacenar una biblioteca musical. El desarrollo realizado <ins>**debe cumplir**</ins> las siguientes funcionalidades:

- La <ins>**información de un artista/s**</ins>, será la siguiente:

  - Nombre
  - Número de oyentes mensuales
  - Discografía

- La <ins>**discografía de un artista**</ins> consistirá en una colección de discos, donde la información de un disco será:

  - Nombre
  - Año de publicación
  - Canciones

- <ins>**Por cada canción perteneciente a un disco**</ins>, la información será la siguiente:

  - Nombre
  - Duración (en segundos)
  - Géneros
  - Single (determina si la canción fue lanzada como un single o no)
  - Número de reproducciones

- La <ins>**biblioteca musical**</ins> deberá permitir:
  - Almacenar la información de diferentes artistas, su discografía y las canciones pertenecientes a cada disco o álbum.
  - Mostrar por la información de la biblioteca en formato tabla `(console.table)`.
  - Llevar a cabo búsquedas de artistas, discos y canciones y mostrar los resultados de la búsqueda en formato de tabla.
  - Calcular el número de canciones incluidas en un disco concreto.
  - Calcular la duración de un disco, a partir de la duración de todas y cada una de las canciones que lo conforman.
  - Calcular el número de reproducciones de un disco, a partir del número de reproducciones de todas y cada una de las canciones incluidas en el mismo.
