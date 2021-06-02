<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'content',
        'fees',
        'thumbnail',
        'keywords',
        'meta_description',
        'meta_title',
        'og_description',
        'twitter_description'
    ];
}
