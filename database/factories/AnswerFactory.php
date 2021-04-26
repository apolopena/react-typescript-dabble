<?php

namespace Database\Factories;

use App\Models\Answer;
use Illuminate\Database\Eloquent\Factories\Factory;

class AnswerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Answer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $s1 = $this->faker->realText(mt_rand(10, mt_rand(10, 80)));
        $s2 = $this->faker->realText(mt_rand(10, mt_rand(10, 100)));
        $desc = rand(1, 2) == 0 ? $s1 : $s1 . ' ' . $s2;
        return [
            'description' => $desc,
        ];
    }
}
