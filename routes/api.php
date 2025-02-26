<?php
//Se crea este archivo crear la ruta de la API
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;

//Route::get('/prueba', function () {
  //  return response()->json(['mensaje' => 'La API funciona correctamente'], 200); //Realiza un mensaje de que la ruta esta correctamente conectada
//});
Route::apiResource('items', ItemController::class); //Se crea la ruta de la API para los items
Route::post('/items', [ItemController::class, 'store']); //Se crea la ruta de la API para los items