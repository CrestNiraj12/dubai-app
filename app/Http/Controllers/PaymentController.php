<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index()
    {
        $payments = Payment::all();
        return response()->json($payments);
    }

    public function store(Request $request) {
        $request->validate([
            'method' => 'required',
            'amount' => 'required',
            'applicant_id' => 'required'
        ]);
        
        Payment::create($request->all());
        return response()->json(['message'=> 'Payment created successfully!']);
    }

    public function show($id) {
        $payment = Payment::find($id);
        return response()->json($payment);
    }

    public function update(Request $request, $id) {
        Payment::where('id', $id)->update($request->all());
        return response()->json(['message'=> 'Payment updated successfully!']);
    }

    public function destroy($id) {
        Payment::where('id', $id)->delete();
        return response()->json(['message'=> 'Payment deleted successfully!']);
    }

}
