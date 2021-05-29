<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        "thumbnail",
        "title",
        "description",
        "content",
        "featured",
        "tags",
        'keywords',
        'meta_description',
        'meta_title',
        'og_description',
        'twitter_description'
    ];
}
