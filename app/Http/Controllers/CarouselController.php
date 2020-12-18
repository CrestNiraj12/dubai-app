<?php

namespace App\Http\Controllers;

use App\Models\Carousel;
use Illuminate\Http\Request;

class CarouselController extends Controller
{
    public function index()
    {
        $carousels = Carousel::all();
        return response()->json($carousels);
    }

    public function store(Request $request) {
         $request->validate([
            'image' => 'required',
        ]);

        $carousel = Carousel::create($request->all());
        return response()->json(['message'=> 'Carousel created successfully!']);
    }

    public function show($id) {
        $carousel = Carousel::find($id);
        return response()->json($carousel);
    }

    public function update(Request $request, $id) {
        Carousel::where('id', $id)->update($request->all());
        return response()->json(['message'=> 'Carousel updated successfully!']);
    }

    public function destroy($id) {
        Carousel::where('id', $id)->delete();
        return response()->json(['message'=> 'Carousel deleted successfully!']);
    }

}
