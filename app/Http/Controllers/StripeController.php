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
            'success_url' => "http://localhost:8080/success/?session_id={CHECKOUT_SESSION_ID}&method=stripe&applicant_id={$request->applicantId}&period={$request->period}",
            'cancel_url' => 'http://localhost:8080/cancel'
        ]);
        return response()->json($session->id);
    }

    public function retrieveSession(Request $request) {
        $sessionId = $request->sessionId;
        $session = \Stripe\Checkout\Session::retrieve($sessionId);
        return response()->json($session);
    }
}
