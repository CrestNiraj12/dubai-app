<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PagesController;
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


Route::get('/', function () {
    return view('/pages/landing-page');
});



Route::group(['middleware' => ['web']], function () {
    Route::get('/courses/{slug}', [PagesController::class, 'getCourse']);
    Route::get('/contact', [PagesController::class, 'getContact']);
    Route::get('/enquiry', [PagesController::class, 'getEnquiry']);
    Route::get('/applicationform', [PagesController::class, 'getApplication']);
    Route::get('/registration-webinar', [PagesController::class, 'getRegistration']);
    Route::get('/{slug}', [PagesController::class, 'getPage']);
    /*
    Route::get('/mdp', [PagesController::class, 'getMdp']);
    Route::get('/csdp', [PagesController::class, 'getCsdp']);
    Route::get('/fdp', [PagesController::class, 'getFdp']);
    Route::get('/efg', [PagesController::class, 'getEfg']);
    Route::get('/cds', [PagesController::class, 'getCds']);
    Route::get('/banking-finance', [PagesController::class, 'getBankFinance']);
    Route::get('/campus-life', [PagesController::class, 'getClife']);
    Route::get('/gallery', [PagesController::class, 'getGallery']);


 
    


    // Courses Routes
    Route::get('/pearson-hnd-hnc', [PagesController::class, 'getPearsonHNDHNC']);
    Route::get('/tquk-hnd-hnc', [PagesController::class, 'getTQUKHNDHNC']);
    // Route::get('/tquk-det', [PagesController::class, 'getTQUKDET']);
    Route::get('/value-investing', [PagesController::class, 'getValueInvesting']);*/

    // thank you pages

    Route::get('/thankyou', [PagesController::class, 'getThankUs']);
    Route::get('/enquiry-thankyou', [PagesController::class, 'getThanksUs']);
    Route::get('/application-thankyou', [PagesController::class, 'getThankssUs']);
});


//Route::get('/courses/{path}', [CourseController::class, 'getCourseView']);
//Route::get('/blog/{path}', [BlogController::class, 'getBlogView']);
//Route::get('/news/{path}', [NewsController::class, 'getNewsView']);
//Route::get('/page/{path}', [PageController::class, 'getPageView']);

/*Route::get( '/{path?}', function() {
    return view( 'welcome' );
} )->where('path', '.*');*/





