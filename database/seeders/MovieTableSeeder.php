<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=6hB3S9bIaco',
                'thumbnail' =>
                    'https://i.ytimg.com/vi/6hB3S9bIaco/maxresdefault.jpg',
                'rating' => 4.3,
                'is_featured' => true,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Crime',
                'video_url' => 'https://www.youtube.com/watch?v=sY1S34973zA',
                'thumbnail' =>
                    'https://i.ytimg.com/vi/sY1S34973zA/maxresdefault.jpg',
                'rating' => 4.2,
                'is_featured' => true,
            ],
            [
                'name' => 'The Dark Knight',
                'slug' => 'the-dark-knight',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
                'thumbnail' =>
                    'https://i.ytimg.com/vi/EXeTwQWrcwY/maxresdefault.jpg',
                'rating' => 4.0,
                'is_featured' => false,
            ],
        ];

        Movie::insert($movies);
    }
}
