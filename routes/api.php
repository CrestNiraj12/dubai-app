<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\StripeController;
use App\Http\Controllers\ApplicantController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\CarouselController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


