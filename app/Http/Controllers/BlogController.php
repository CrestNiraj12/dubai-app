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

    public function getBlogView($id) {
        $blog = $this->show($id);
        return view('welcome', [
            'title' => $blog['title'], 
            'description' => $blog['description'], 
            'image_path' => $blog['thumbnail'], 
            'meta_title' => $blog['meta_title'],
            'keywords' => $blog['keywords'],
            'meta_description' => $blog['meta_description'],
            'og_description' => $blog['og_description'],
            'twitter_description' => $blog['twitter_description'],
        ]);
    }
}
