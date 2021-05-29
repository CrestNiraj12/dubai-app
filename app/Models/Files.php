<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Files extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "file_path",
        "category_id",
    ];

    public function file_category()
    {
        return $this->belongsTo(FileCategory::class, "category_id");
    }
}
