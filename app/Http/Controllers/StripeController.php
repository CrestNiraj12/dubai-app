<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StripeController extends Controller
{
    public function paymentProcess(Request $request) {
        $course = $request->course;
        $course = mb_convert_encoding($course,'UTF-8','UTF-8');
        $session = \Stripe\Checkout\Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [json_decode(str_replace("'",'"', $course), true)],
            'mode' => 'payment',
            'success_url' => 'http://localhost:8080/success',
            'cancel_url' => 'http://localhost:8080/'
        ]);
        return response()->json($session->id);
    }
}
