<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;

    protected $table = 'answers';
    public $timestamps = true;

    protected $fillable = [
        'description',
        'question_id'
    ];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
