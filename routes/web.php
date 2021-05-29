<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;
use TCG\Voyager\Facades\Voyager;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});


Route::get('/courses/{path}', [CourseController::class, 'getCourseView']);
Route::get('/blog/{path}', [BlogController::class, 'getBlogView']);
Route::get('/news/{path}', [NewsController::class, 'getNewsView']);
Route::get('/page/{path}', [PageController::class, 'getPageView']);

Route::get( '/{path?}', function() {
    return view( 'welcome' );
} )->where('path', '.*');





