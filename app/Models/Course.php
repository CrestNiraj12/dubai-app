<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'facts',
        'requirements',
        'image',
        'yearly_fee',
        'uni_fee',
        'keywords',
        'meta_description',
        'meta_title',
        'og_description',
        'twitter_description'
    ];
}
