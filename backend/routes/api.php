<?php

use App\Http\Controllers\AuthenticationController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\admin\MemberController;

Route::post('authenticate', [AuthenticationController::class, 'authenticate']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index']);
    Route::get('logout', [AuthenticationController::class, 'logout']);

    Route::get('services', [ServiceController::class, 'index']);
    Route::post('services', [ServiceController::class, 'store']);
    Route::get('services/{id}', [ServiceController::class, 'show']);
    Route::put('services/{id}', [ServiceController::class, 'update']);
    Route::delete('services/{id}', [ServiceController::class, 'destroy']);

    Route::post('temp-image', [TempImageController::class, 'store']);
    
    //member routes
    Route::post('members',[MemberController::class,'store']);
    Route::get('members',[MemberController::class,'index']);
    Route::get('members/{id}',[MemberController::class,'show']);
    Route::put('members/{id}',[MemberController::class,'update']);
    Route::delete('members/{id}',[MemberController::class,'destroy']);


});
