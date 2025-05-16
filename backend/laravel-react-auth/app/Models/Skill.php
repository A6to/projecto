<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = [
        'label',
        'category'
    ];

    // Optional: Define categories as constants
    public const CATEGORIES = [
        'TECHNOLOGY' => 'Technology',
        'DESIGN' => 'Design',
        'LANGUAGE' => 'Language',
        'ART' => 'Art',
        'BUSINESS' => 'Business',
        'OTHER' => 'Other'
    ];
}
