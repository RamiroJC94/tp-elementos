# tp-elementos
[![Build Status](https://travis-ci.com/miguelEq/tp-elementos.svg?branch=master)](https://travis-ci.com/miguelEq/tp-elementos)

## Pasos para ejecutar el ambiente
### tener instalado mongodb
### Install yarn (si no lo tenemos)
### cd backend
### yarn install
### yarn test 

# Api MovieMoon
 Una api que nos permite buscar peliculas y poder ingresar como usuario del sistema

## Metodos de la api

### POST /users/login
   ## Parametros

```
	| Name          | Type   | 
	| ------------- |:------:| 
	| username      | String | 
	| password      | String | 
	
``` 

## Example
```
body{
	"username" : "josesp",
	"password" : "pedrito2323"
}
```

### POST /user
 
  ```
	| Name          | Type   | 
	| ------------- |:------:| 
	| username      | String | 
	| password      | String | 
	| name          | String |
	| mail          | String |

  ``` 

## Example 
   ```
    body{
    	"username" : "pepito32",
    	"password" : "12345",
    	"name"     : "pepito",
    	"mail"     : "pepito32_@hotmail.com"
    }
   ```

### GET /movies

## si contiene parametro "titulo"
   >Busca una pelicula por ese titulo y si la encuentra la retorna   
## si no contiene el parametro "titulo"
   >Devuelve todas las peliculas del sistema
