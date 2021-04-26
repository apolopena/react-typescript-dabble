<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
    public function new(Request $request)
    {
        $validated = $request->validate([
            'description' => 'required',
            'question_id' => 'required',
        ]);

        $answer = Answer::create([
            'description' => $validated['description'],
            'question_id' => $request->question_id,
        ]);

        return response()->json(Question::with(['answers'])->find($request->question_id)->answers);
    }
}
