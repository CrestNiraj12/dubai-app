<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::all();
        return response()->json($blogs);
    }

    public function store(Request $request) {
        $request->validate([
            'title'        => 'required',
            'description'  => 'required',
            'content'      => 'required',
            'thumbnail'    => 'required',
            'featured'   => 'required',
            'tags'      => 'required',
            'keywords' => 'required',
        'meta_description' => 'required'
        ]);
        
        Blog::create($request->all());
        return response()->json(['message'=> 'Blog created successfully!']);
    }

    public function show($id) {
        $blog = Blog::find($id);
        return response()->json($blog);
    }

    public function update(Request $request, $id) {
        Blog::where('id', $id)->update($request->all());
        return response()->json(['message'=> 'Blog updated successfully!']);
    }

    public function destroy($id) {
        Blog::where('id', $id)->delete();
        return response()->json(['message'=> 'Blog deleted successfully!']);
    }

    public function getBlogView($path) {
        $sep = explode("-", $path);
        $blog = Blog::find(end($sep));
        return view('pages.blogpost', ['post' => $blog]);
    }
}
