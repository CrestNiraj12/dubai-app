<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use Illuminate\Http\Request;

class CouponController extends Controller
{
    public function index()
    {
        $coupons = Coupon::all();
        return response()->json($coupons);
    }

    public function store(Request $request) {
        $request->validate([
            'code'             => 'required',
            'discount_period'  => 'required',
            'discount'         => 'required',
            'type'             => 'required',
        ]);
        
        Coupon::create($request->all());
        return response()->json(['message'=> 'Coupon created successfully!']);
    }

    public function show($id) {
        $coupon = Coupon::find($id);
        return response()->json($coupon);
    }

    public function update(Request $request, $id) {  
        Coupon::where('id', $id)->update($request->all());
        return response()->json(['message'=> 'Coupon updated successfully!']);
    }

    public function destroy($id) {
        Coupon::where('id', $id)->delete();
        return response()->json(['message'=> 'Coupon deleted successfully!']);
    }

}
