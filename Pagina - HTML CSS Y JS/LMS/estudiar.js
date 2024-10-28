<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrusel de Imágenes</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .carrusel {
            position: relative;
            width: 80%;
            overflow: hidden;
        }
        .contenido {
            display: flex;
            transition: transform 0.5s ease;
            width: 100%; /* Ancho completo para el contenedor de las imágenes */
        }
        .imagen {
            width: 100%; /* Cada imagen ocupa el 100% del carrusel */
            box-sizing: border-box;
            padding: 5px;
        }
        img {
            width: 100%;
            border-radius: 10px;
        }
        .boton {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(255, 255, 255, 0.8);
            border: none;
            border-radius: 50%;
            padding:
