# BienesApp

BienesApp es una aplicación móvil desarrollada con React Native (Expo) y TypeScript como parte de un desafío técnico. Su objetivo es ayudar a los usuarios a llevar un registro diario de su bienestar emocional. Permite registrar cómo se sienten cada día, visualizar el historial de entradas y editar o eliminar registros de forma simple y rápida.

## Índice

- [Capturas de Pantalla](#capturas-de-pantalla-del-proyecto)
- [Prerrequisitos o Dependencias](#prerrequisitos-o-dependencias)
- [Instalación del Proyecto](#instalación-del-proyecto)
- [Ejecutar Test Unitarios](#ejecutar-test-unitarios)
- [Decisiones Técnicas](#decisiones-tecnicas)
- [Qué mejoraría con más tiempo](#qué-mejorarías-con-más-tiempo)
  
## Capturas de Pantalla del Proyecto

<img src="https://github.com/user-attachments/assets/aabb4af0-eb81-4103-bf7d-ca894678a880" width="300" />
<img src="https://github.com/user-attachments/assets/00cca5a5-9486-4c03-a6b0-d6824046a60f" width="300" />

## Prerrequisitos o Dependencias

Asegurate de tener instalado lo siguiente antes de correr el proyecto:
- Nodejs
- npm o yarn
- Expo
- AndroidStudio(emuladores)
  
Dependencias del proyecto:

- **React Native** - Framework utilizado para el desarrollo movil.
- **TypeScript** - Lenguaje tipado para detectar mejor los errores en el desarrollo, mas facil de entender y escalar el proyecto.
- **Expo** - Herramienta que facilita el desarrollo en React Native con emuladores.
- **AsyncStorage** - Para guardar datos localmente.
- **Zustand** - Librería para manejar el estado global.
- **Jest** - Framework de testing para ejecutar pruebas unitarias.
- **Picker** - Libreria para seleccionar los valores en los formularios. 

## Instalación del Proyecto

Configurar el entorno de desarrollo e instalar todas las dependencias.

```bash
# paso 1: CLonar el repositorio
git clone https://github.com/Josemascherpa/DesafioRA.git
cd DesafioRA
```

```bash
# paso 2: Instalar dependencias del proyecto
npm install 
```
```bash
# paso 3: Iniciar la aplicacion en modo desarrollo con Expo
npm start 
```


## Ejecutar Test Unitarios
```bash
# Para correr los test unitarios
npm test
```

## Decisiones Tecnicas
- Se utilizó Zustand para el manejo de estado global, mas simple y legible.
- Se implementó AsyncStorage para persistencia local, permitiendo guardar el historial de animos diarios sin necesidad de base de datos.
- Se prefirió no usar React Hook Form ya que el formulario es simple y su validación se resolvía fácilmente sin necesidad de tanto codigo.
- Se opto por utilizar la libreria Picker para ahorrar validaciones en inputs y ademas, por temas de mejoras visuales y facilitaciones al usuario.
- La app está organizada con una estructura de carpetas clara y reutiliznado los componentes necesarios.

## ¿Qué mejorarías con más tiempo?
Con mas tiempo buscaria mejorar el diseño visual con una UI mas atractiva. Buscar la posibilidad de hacer mas detallado el informe del animo diario, haciendo uso de React Hook Form y poder implementar graficos detallados con la informacion obtenida de dias anteriores. Ver la posibilidad de incluir una autenticacion de usuario e incluir una base de datos, ampliando asi la aplicacion y agregando nuevas screens.
Y por ultimo agregar nuevos test a componentes reutilizables.


