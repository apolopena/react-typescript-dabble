<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\{Question, Answer};

class QnASeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Answer::factory()->forQuestion()->count(2)->create();
        Question::factory()->hasAnswers(3)->create();
        Question::factory()->create();
        Question::factory()->hasAnswers(5)->create();
    }
}
