<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class SongsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->name(),
            'album_cover' => $this->faker->imageUrl(),
            'length' => $this->faker->numberBetween(100, 400),
            'artist' => $this->faker->name(),
            'album' => $this->faker->name(),
            'bpm' => $this->faker->numberBetween(60, 200),
            'key' => $this->faker->randomElement(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A#', 'C#', 'D#', 'F#', 'G#', 'Bb', 'Eb', 'Ab', 'Db', 'Gb',]),
            'tuning' => $this->faker->randomElement(['E Standard', 'Drop D', 'Half Step Down', 'Full Step Down', 'Drop C', 'Drop B', 'Open C', 'Open D', 'Open E', 'DADGAD']),
            'cover' => $this->faker->boolean(),
            'metronome' => $this->faker->boolean()
        ];
    }
}
