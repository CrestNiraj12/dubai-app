<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FileCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
    ];

    public function files()
    {
        return $this->hasMany(Files::class, "category_id");
    }
}
