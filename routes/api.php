<?php
//Se crea este archivo crear la ruta
use Illuminate\Support\Facades\Route;

Route::get('/prueba', function () {
    return response()->json(['mensaje' => 'La API funciona correctamente'], 200); //Realiza un mensaje de que la ruta esta correctamente conectada
});
