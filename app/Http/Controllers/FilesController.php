<?php

namespace App\Http\Controllers;

use App\Models\Files;
use Illuminate\Http\Request;

class FilesController extends Controller
{
    public function getFile($id) {
        return response()->json($this->show($id));
    }

    public function getAllFiles() {
        $files = Files::with("file_category")->get();
        return response()->json($files);
    }

    public function getFilesView() {
        $files = Files::with("file_category")->get();
        return view("pages.downloads", ['files' => $files]);
    }
}
