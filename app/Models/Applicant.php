<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicant extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'phone',
        'dob',
        'qualification',
        'gpa',
        'school',
        'address',
        'coupon_applied',
        'payment_made',
        'course_id',
        'coupon_id'
    ];
}
