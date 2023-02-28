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

### Desarrollo del Ejercicio

Para este ejercicio se ha optado por hacer varias interfaces, clases abstractas y subclases para los elementos que componen la biblioteca musical.

#### <ins>**Canciones**</ins>

En primer lugar están las canciones que componen cada uno de los albumes de los artistas, para su implementación se ha creado la interfaz `SongInfo`, que define las propiedas básicas que deben tener todas las canciones:

- `title`: Nombre de la canción
- `duration`: Duración, en segundos, de la canción
- `single`: Un booleano que indica si la canción fue lanzada como un **"single"** o no.
- `reproductions`: Nº de reproducciones que tiene dicha canción.
- `genres`: Géneros de la canción.

> **_\*Nota:_** La propiedad `single` se podría omitir si se hubiese adoptado un diseño enfocado en tener dos clases heredadas, `SingleSong` y `AlbumSong` de una clase padre abstracta `Song`. Ambas clases a nivel de propiedades son idénticas, teniendo diferencia en el uso que les queramos dar.

```typescript
interface SongInfo {
  readonly title: string;
  readonly duration: number;
  readonly single: boolean;
  reproductions: number;
  genres: string[];
}
```

A continuación, se decidió implementar esta interfaz en la clase `Song`:

```typescript
export class Song implements SongInfo {
  private _genres: string[];
  constructor(
    public readonly title: string,
    public readonly duration: number,
    public readonly single: boolean,
    private _reproductions: number,
    ...genres: string[]
  ) {
    this._genres = genres;
  }

  get genres(): string[] {
    return this._genres;
  }

  set genres(genres: string[]) {
    this._genres = genres;
  }

  get reproductions(): number {
    return this._reproductions;
  }

  set reproductions(reproductions: number) {
    this._reproductions = reproductions;
  }

  incrementReproductions(): number {
    return ++this._reproductions;
  }

  addGenre(genre: string): void {
    this._genres.push(genre);
  }
}
```

Analizando un poco la clase nos podemos dar cuenta de varias cosas, como por ejemplo que la propiedad `reproductions` y `genres` que definimos en la interfaz no hacen referencia a atributos en la clase `Song`, sino a los métodos `get` y `set` de los atributos `_reproductions` y `_genres` definidos en la clase (Notese los guiones bajos).

La razón de esto es porque se ha optado por tener estos atributos como privados, y controlar el acceso a los mismos mediantes getters y setters. Respecto al tema del acceso, el resto de atributos de la clase (los que hemos definido ya en `SongInfo`) obviamente son públicos, pero además de ello, son sólo de lectura, ya que siguiendo la lógica de este ejercicio, no tenemos necesidad a priori de modificar el nombre, duración o la característica de si es un single o no.

#### <ins>**CDs**</ins>

Siguiendo la metodología utilizada en las canciones, se ha definido inicialmente una interfaz para los cds, `CDInfo`, que contiene las siguientes propiedades:

- `title`: Nombre del Disco
- `year`: Año de Lanzamiento
- `songs`: Colección de canciones que componen el disco (Luego observaremos que cumple el mismo caso que `reproductions` y `genres` en la clase `Song`).

```typescript
interface CDInfo {
  readonly title: string;
  readonly year: number;
  songs: Song[];
}
```

Con dicha interfaz, se ha implementado la clase `CD`:

```typescript
export class CD implements CDInfo {
  private _songs: Song[];
  constructor(
    public readonly title: string,
    public readonly year: number,
    ...songs: Song[]
  ) {
    this._songs = songs;
  }

  get songs(): Song[] {
    return this._songs;
  }

  set songs(songs: Song[]) {
    this._songs = songs;
  }

  addSong(song: Song): void {
    this._songs.push(song);
    return;
  }
}
```

Como se puede observar, es bastante sencilla y funcional la clase, siguiendo un patrón muy parecido a la anterior clase: los atributos públicos sólo están disponibles como lectura, los privados contienen sus respectivos getters y setters...

#### <ins>**Artistas**</ins>

Aquí ya es cuando la cosa se vuelve más compleja, ya que tenemos que contemplar el hecho de que el artista de una cd puede ser un solista, o un grupo. Para lograr este objetivo, creamos primero la interfaz `ArtistInfo`, que contiene las propiedades comunes para ambos casos:

- `name`: Nombre del artista/banda
- `discography`: Discografía del artista/banda.

```typescript
interface ArtistInfo {
  readonly name: string;
  discography: CD[];
}
```

Y a continuación creamos una <ins>**clase abstracta**</ins> `BaseArtist` que define las propiedades de `ArtistInfo`.

```typescript
export abstract class BaseArtist implements ArtistInfo {
  protected _discography: CD[];
  constructor(
    public readonly name: string,
    protected _monthlyListeners: number,
    ...discography: CD[]
  ) {
    this._discography = discography;
  }

  get monthlyListeners(): number {
    return this._monthlyListeners;
  }

  set monthlyListeners(monthlyListeners: number) {
    this._monthlyListeners = monthlyListeners;
  }

  get discography(): CD[] {
    return this._discography;
  }

  set discography(discography: CD[]) {
    this._discography = discography;
  }

  addCD(cd: CD): void {
    this._discography.push(cd);
  }
}
```

En funcionalidad, lo único destacable que comentar es que el atributo `_monthlyListeners` y `_discography` en vez de ser privados como en las otras clases, son `protected` ya que las clases derivadas van a necesitar estos atributos.

Y con esto aclarado, podemos implementar las clases `Artist` y `Band`:

```typescript
export class Artist extends BaseArtist {
  constructor(name: string, monthlyListeners: number, ...discography: CD[]) {
    super(name, monthlyListeners, ...discography);
  }
}
```

```typescript
export class Band extends BaseArtist {
  constructor(name: string, monthlyListeners: number, ...discography: CD[]) {
    super(name, monthlyListeners, ...discography);
  }
}
```

#### <ins>**Biblioteca Musical**</ins>

Sólo nos queda desarrollar nuestra biblioteca musical, para ello vamos a definir primero la interfaz que debe seguir, `MusicLibraryInfo`, que define las siguientes propiedades:

- `showInfo()`: Muestra la información de la biblioteca musical por pantalla. Observar cómo especificamos que debe ser una función con el uso de paréntesis, al contrario que con los getters y setters.
- `searchSong()`: Buscará en la biblioteca una canción determinada por su nombre. En el caso de éxito devuelve la canción (objeto `Song`), en cualquier otro caso, `false`.
- `searchCD()`: Busca un cd en función de su nombre. En el caso de éxito devolverá el cd (objeto `CD`), en caso contrario, `false`.
- `searchArtist()`: Busca un artista en función de su nombre, ya sea solista o banda. En caso de éxito, devuelve dicho artista (objeto `Artist` o `Band`, que heredan de `BaseArtist`), en caso contrario, `false`.
- `countSongsInDisc()`: Cuenta el número de objetos `Song` en un disco en concreto. Devuelve `0` en el caso de que el disco no posea ninguna canción o no se encuentre en la biblioteca.
- `calculateCDDuration()`: Calcula la duración total, en segundos, de un CD. Devuelve `0`, en el caso de que no se encuentre en la biblioteca.
- `calculateCDReproductions()`: Calcula la cantidad de reproducciones en total de todas las canciones de un CD.

```typescript
interface MusicLibraryInfo {
  showInfo(): string;
  searchSong(title: string): Song | false;
  searchCD(title: string): CD | false;
  searchArtist(name: string): BaseArtist | false;

  countSongsInDisc(title: string): number;
  calculateCDDuration(title: string): number;
  calculateCDReproductions(title: string): number;
}
```

En base a estas propiedades, desarrollamos la clase `Music Library`:

```typescript
export class MusicLibrary implements MusicLibraryInfo {
  private _artists: BaseArtist[];
  constructor(private _name: string, ...artists: BaseArtist[]) {
    this._artists = artists;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get artists(): BaseArtist[] {
    return this._artists;
  }

  set artists(artists: BaseArtist[]) {
    this._artists = artists;
  }

  showInfo(): string {
    const name = `Nombre de la biblioteca: ${this.name}`;
    const artists = `Artistas: ${this.artists
      .map((artist) => artist.name)
      .join(", ")}`;
    console.log(name);
    console.log(artists);
    return name + "\n" + artists;
  }

  searchSong(title: string): Song | false {
    for (let artist of this.artists)
      for (let cd of artist.discography)
        for (let song of cd.songs) if (song.title === title) return song;
    return false;
  }

  searchCD(title: string): CD | false {
    for (let artist of this.artists)
      for (let cd of artist.discography) if (cd.title === title) return cd;

    return false;
  }

  searchArtist(name: string): BaseArtist | false {
    for (let artist of this.artists) if (artist.name === name) return artist;
    return false;
  }

  countSongsInDisc(title: string): number {
    let searchResult = this.searchCD(title);
    if (searchResult instanceof CD) return searchResult.songs.length;
    return 0;
  }

  calculateCDDuration(title: string): number {
    let searchResult = this.searchCD(title);
    if (searchResult instanceof CD) {
      return searchResult.songs.reduce((acc, song) => acc + song.duration, 0);
    }
    return 0;
  }

  calculateCDReproductions(title: string): number {
    let searchResult = this.searchCD(title);
    if (searchResult instanceof CD) {
      return searchResult.songs.reduce(
        (acc, song) => acc + song.reproductions,
        0
      );
    }
    return 0;
  }
}
```

Las anteriores clases e interfaces se han desarrollado de manera defensiva siguiendo las pruebas previamente escritas en el directorio `src`. La solución propuesta es una de muchas posibilidades, aunque intenta ser lo más flexible posible, observando los aspectos mejorables como la propiedad `single` comentada en una **nota** en la interfaz `SongInfo`.

## Ejercicio 2 - Conecta 4

> El juego <ins>**Conecta 4**</ins> consiste en una rejilla de **6 filas** y **7 columnas**, dos jugadores se turnan para ir colocando un conjunto de fichas dejándolas caer por alguna de las siete columnas de la rejilla. Cada jugador dispone de un total de 21 fichas de un color diferente.

> En cada turno, una ficha tomará la primera posición libre de la columna seleccionada por el jugador que corresponda. Si la columna está completa, esto es, ya cuenta con seis fichas, dicha columna no podrá ser seleccionada por ninguno de los dos jugadores para dejar caer otra ficha. El objetivo del jugador es colocar cuatro fichas consecutivas ya sea en una misma fila, una misma columna o en diagonal.

En el caso de que no conozcan el juego y deseen probarlo, pueden jugar contra una IA u otro jugador desde este [enlace](https://www.mathsisfun.com/games/connect4.html).

En este ejercicio debemos realizar la jerarquía de clases e interfaces necesarias para implementar el juego, teniendo en cuenta la descripción anterior.

## PE102

### <ins>**Ejercicio 1. Función mediaFilter**</ins>

En este ejercicio tuvimos que realizar una función `mediaFilter`, que recibiese como entrada un array bidimensional (cuadrada) de números enteros del 0 al 255, es decir, una imagen en blanco y negro.

El objetivo de la función es aplicar una técnica de suavizado, en este caso, cambiar el valor de cada pixel de la imagen por el resultado de la media de sus pixeles adyacentes. En el caso de los pixeles que comforman los bordes de la matriz, se deberán coger los pixeles inmediatamente adyacentes y los adyacentes en el borde contrario.

Para realizar este ejercicio, se optó por realizar dos funciones, una función `avg` que calcularía la media de los adyacentes de un pixel y la función solicitada `mediaFilter`.

```typescript
export function avg(image: number[][], i: number, j: number) {
  let sum = 0;
  let count = 0;
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      if (x == 0 && y == 0) continue;
      sum +=
        image[(i + x + image.length) % image.length][
          (j + y + image[i].length) % image[i].length
        ];
      count++;
    }
  }
  return Math.trunc(sum / count);
}
```

Para lograr la circularidad de la matriz, aplicamos el módulo del tamaño de filas y columnas para las posiciones en filas y columnas, respectivamente, de los pixeles adyacentes.

```typescript
export function mediaFilter(image: number[][]) {
  for (let i = 0; i < image.length; i++)
    if (image.length != image[0].length) return undefined;

  let result: number[][] = new Array(image.length)
    .fill(0)
    .map(() => new Array(image[0].length).fill(0));
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      result[i][j] = avg(image, i, j);
    }
  }
  return result;
}
```

Para el suavizado, se ha creado una matriz `result` inicializada a `0` para guardar los resultados de cada media, se recorre cada uno de los pixeles de `image` y se guarda el resultado de `avg` en el correspondiente pixel de `result`.

### <ins>**Ejercicio 2. Clase Hexadecimal**</ins>

Nos piden implementar una clase `Hexadecimal`, que reciba como parametro en el constructor un número entero. Además, la clase debe tener los siguientes métodos:

- `valueOf()`: Devuelve el valor como número entero del objeto `Hexadecimal`.
- `toString()`: Devuelve una cadena de caracteres conteniendo la representación en hexadecimal del número pasado en el constructor.
- `parse()`: Deberá recibir como argumento una cadena de caracteres conteniendo un número en forma hexadecimal, y deberá devolver su valor decimal como entero.

Aparte, se deberán realizar las siguientes funciones:

- `add()`: Debe devolver la suma de dos números hexadecimales como un nuevo número hexadecimal
- `sub()`: Debe devolver la resta de dos números hexadecimales como un nuevo hexadecimal.

```typescript
export class Hexadecimal {
  constructor(private _number: number) {}

  valueOf(): number {
    return this._number;
  }

  toString(): string {
    return this._number.toString(16).toUpperCase();
  }

  static parse(hex: string): number {
    return parseInt(hex, 16);
  }
}

export function add(a: Hexadecimal, b: Hexadecimal): Hexadecimal {
  return new Hexadecimal(a.valueOf() + b.valueOf());
}

export function sub(a: Hexadecimal, b: Hexadecimal): Hexadecimal {
  return new Hexadecimal(a.valueOf() - b.valueOf());
}
```

Notese como el método `parse()` se ha definido como un método estático de la clase `Hexadecimal`, esto logra que no haya que crear un objeto `Hexadecimal` si sólo queremos saber el valor en decimal de un número hexadecimal.
