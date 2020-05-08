# Api rest express
## Programación Avanzada 2020

# Iniciar proyecto 🚀

  ### Posicionarse en el directorio  
    > cd api_rest_express

   ### Instalar dependencias 
    > npm install

   ### Correr la Aplicación
    > SET DEBUG=api-rest-express:* & npm start
  
  # Documentación Api rest 📋

  ## Clientes 
  * Ver listado de clientes
```
GET localhost:300/clients
```

  * Ver un cliente 
```
GET localhost:3000/clients/idClient
```
* Crear un cliente  
```
POST localhost:3000/clients
```
ó
```
POST -d"name:value" localhost:3000/clients
```

* Actualizar un cliente  
```
PUT -d"name:value" localhost:3000/clients/idClient
```
* Borrar un cliente 
```
DELETE localhost:3000/clients/idClient
```
  ## Autora ✒️
  * ** Laura Antonella Canessa  (https://github.com/anto0694)