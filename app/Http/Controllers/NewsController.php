<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::all();
        return response()->json($news);
    }

    public function store(Request $request) {
        $request->validate([
            'title'        => 'required',
            'description'  => 'required',
            'content'      => 'required',
            'thumbnail'    => 'required',
            'featured'   => 'required',
            'tags'      => 'required'
        ]);
        
        News::create($request->all());
        return response()->json(['message'=> 'News created successfully!']);
    }

    public function show($id) {
        $news = News::find($id);
        return response()->json($news);
    }

    public function update(Request $request, $id) {
        News::where('id', $id)->update($request->all());
        return response()->json(['message'=> 'News updated successfully!']);
    }

    public function destroy($id) {
        News::where('id', $id)->delete();
        return response()->json(['message'=> 'News deleted successfully!']);
    }

    public function getNewsView($path) {
        $sep = explode("-", $path);
        $news = News::find(end($sep));
        return view('pages.newspost', ['post' => $news]);
    }
}
