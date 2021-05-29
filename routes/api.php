<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\StripeController;
use App\Http\Controllers\ApplicantController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\CarouselController;
use App\Http\Controllers\FilesController;
use App\Http\Controllers\NavigationController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/stripe/pay', [StripeController::class, 'paymentProcess']);
Route::post('/stripe/session', [StripeController::class, 'retrieveSession']);

Route::resource('courses', CourseController::class);
Route::resource('coupons', CouponController::class);
Route::resource('applicants', ApplicantController::class);
Route::resource('payments', PaymentController::class);
Route::resource('images', CarouselController::class);
Route::resource('blogs', BlogController::class);
Route::resource('news', NewsController::class);
Route::get('navigation', [NavigationController::class, 'index']);
Route::get('files', [FilesController::class, 'getAllFiles']);
Route::get('files/{id}', [FilesController::class, 'getFile']);
Route::get('pages', [PageController::class, 'getAllPages']);
Route::get('pages/{slug}', [PageController::class, 'getPageBySlug']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


