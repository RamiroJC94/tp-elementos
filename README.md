# tp-elementos
[![Build Status](https://travis-ci.com/miguelEq/tp-elementos.svg?branch=master)](https://travis-ci.com/miguelEq/tp-elementos)

## Pasos para ejecutar el ambiente
### tener instalado mongodb

###			------------------------------		mongodb 	linux	apt 	------------------------------

###			sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 4B7C549A058F8B6B
###			echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb.list

###			sudo apt update
###			sudo apt install mongodb-org

###			sudo apt install mongodb-org=4.2.8 mongodb-org-server=4.2.8 mongodb-org-shell=4.2.8 mongodb-org-mongos=4.2.8 mongodb-org-tools=4.2.8

###			sudo systemctl enable mongod
###			sudo systemctl start mongod
###			sudo systemctl stop mongod
###			sudo systemctl restart mongod

###			mongod --version

###			------------------------------		mongodb 	linux	apt 	------------------------------

### Install yarn (si no lo tenemos)

### yarn install en el directorio backend	(yarn -i)
### yarn install en el directorio frontend	(yarn -i)

### yarn test (en el backend) (limpia la bd)
--------------------------
### yarn run setUp (en el backend) (cargar la bd)

### yarn start (en el backend) (levantar la api)

### levantar mongo

###			------------------------------		mongod 	linux	levantar 	------------------------------

###			sudo systemctl start mongod

###			------------------------------		mongod 	linux	levantar 	------------------------------

### yarn start (en el frontend) (levantar la pagina)
[Backlog hecho en Trello](https://trello.com/b/O7zFi1hu/backlog)
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
