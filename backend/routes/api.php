<?php

use App\Http\Controllers\AuthenticationController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\ArticleController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\admin\ProjectController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\admin\MemberController;
use App\Http\Controllers\front\ContactController;
use App\Http\Controllers\front\ProjectController as FrontProjectController;
use App\Http\Controllers\front\ServiceController as FrontServiceController;
use App\Http\Controllers\admin\MemberController as FrontMemberController;

Route::post('authenticate', [AuthenticationController::class, 'authenticate']);
Route::get('get-services', [FrontServiceController    ::class, 'index']);
Route::get('get-latest-services', [FrontServiceController    ::class, 'latestServices']);
Route::get('get-members', [FrontMemberController    ::class, 'index']);
Route::get('get-service/{id}', [FrontServiceController    ::class, 'service']);
Route::post('contact-now', [ContactController::class, 'index']);

Route::get('get-projects', [FrontProjectController    ::class, 'index']);
Route::get('get-latest-projects', [FrontProjectController    ::class, 'latestProjects']);
Route::get('get-project/{id}', [FrontProjectController    ::class, 'project']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index']);
    Route::get('logout', [AuthenticationController::class, 'logout']);

    Route::get('services', [ServiceController::class, 'index']);
    Route::post('services', [ServiceController::class, 'store']);
    Route::get('services/{id}', [ServiceController::class, 'show']);
    Route::put('services/{id}', [ServiceController::class, 'update']);
    Route::delete('services/{id}', [ServiceController::class, 'destroy']);

    Route::post('projects', [ProjectController::class, 'store']);
    Route::get('projects', [ProjectController::class, 'index']);
    Route::put('projects/{id}', [ProjectController::class, 'update']);
    Route::get('projects/{id}', [ProjectController::class, 'show']);
    Route::delete('projects/{id}', [ProjectController::class, 'destroy']);
    Route::post('temp-image', [TempImageController::class, 'store']);
    
    //member routes
    Route::post('members',[MemberController::class,'store']);
    Route::get('members',[MemberController::class,'index']);
    Route::get('members/{id}',[MemberController::class,'show']);
    Route::put('members/{id}',[MemberController::class,'update']);
    Route::delete('members/{id}',[MemberController::class,'destroy']);

    //article
    Route::post('articles',[ArticleController::class,'store']);
    Route::get('articles',[ArticleController::class,'index']);
    Route::get('articles/{id}',[ArticleController::class,'show']);
    Route::put('articles/{id}',[ArticleController::class,'update']);
    Route::delete('articles/{id}',[ArticleController::class,'destroy']);
});
