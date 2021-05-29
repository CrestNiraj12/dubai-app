<?php

namespace App\Http\Controllers;

use App\Models\FileCategory;
use Illuminate\Http\Request;

class FileCategoryController extends Controller
{
    public function getAllfileCategories() {
        $fileCategories = FileCategory::with('files')->get();
        return response()->json($fileCategories);
    }
}
