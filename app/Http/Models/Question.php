<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $table = 'questions';
    public $timestamps = true;

    protected $fillable = [
        'description'
    ];

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
}
