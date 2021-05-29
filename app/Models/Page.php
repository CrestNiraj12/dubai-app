<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'slug',
        'image',
        'content',
        'keywords',
        'meta_description',
        'meta_title',
        'og_description',
        'twitter_description'
    ];
}
