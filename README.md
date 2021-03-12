# GraficasApp


## Description

Proyecto GraficasApp del curso "Angular: Decero a experto (Edición 2021)".  
Esta aplicación muestra como utilizar la libreria [ng2-charts](https://valor-software.com/ng2-charts/) para generar gráficas de barras, donas, etc.

## Temas Cubiertos en esta aplicación:
* Modularización de la aplicación
* LazyLoad
* [Bootstrap](https://getbootstrap.com/)
* JSON-Server
* Gráficas dinámicas
* Gráficas de Barra y Dona
* Re-dibujar valores de gráfica
* Gráficas basadas en peticiones HTTP
* Expresiones Reactivas RXJS (Operador map y delay)


## Development server
Ejecutar`ng serve` para el servidor de desarrollo. Navegar a  `http://localhost:4200/`. La aplicación será automaticamente recargada si se realizan cambios en el código fuente.

## Backend Server
Para simular el servidor backend se utiliza el paquete [JSON Server](https://www.npmjs.com/package/json-server).

Para instalar el **JSON server** se debe ejecutar el siguiente comando:
```text
npm install -g json-server
```

La base de datos ``db.json`` debe tener la siguiente estructura:

```json5
{
  "grafica": {
    "facebook": 2700,
    "youtube": 2000,
    "whatsapp": 1400,
    "facebook-messenger": 1350,
    "instagram": 1123
  }
}
```
Para ejecutar el servidor, dentro de la carpeta donde se encuentra el archivo ``db.json``, se debe ejecutar el siguiente comando:

```text
json-server --watch db.json
```

## Application en producción
[GraficasApp](https://graficasapp.netlify.app/)
