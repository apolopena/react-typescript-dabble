<?php

namespace Database\Factories;

use App\Models\Question;
use Illuminate\Database\Eloquent\Factories\Factory;

class QuestionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Question::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $desc = $this->faker->realText(mt_rand(15, 130));
        return [
            'description' =>  substr($desc, 0, strlen($desc) - 1) . '?',
        ];
    }
}
