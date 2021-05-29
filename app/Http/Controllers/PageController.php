<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function getAllPages() {
        $pages = Page::all();
        return response()->json($pages);
    }

    public function getPageBySlug($slug) {
        $page = Page::where('slug', "$slug")->first();
        return response()->json($page);
    }

    public function getPageView($path) {
        $page = Page::where('slug', "$path")->first();
        return view('welcome', [
            'title' => $page['title'], 
            'description' => $page['description'], 
            'image_path' => $page['image'], 
            'meta_title' => $page['meta_title'],
            'keywords' => $page['keywords'],
            'meta_description' => $page['meta_description'],
            'og_description' => $page['og_description'],
            'twitter_description' => $page['twitter_description'],
        ]);
    }
}
