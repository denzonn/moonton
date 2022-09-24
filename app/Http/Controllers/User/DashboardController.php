<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $featuredMovies = Movie::where('is_featured', true)->get();
        //Movie all
        $movies = Movie::all();

        return inertia('User/Dashboard/Index', [
            'featuredMovies' => $featuredMovies,
            'movies' => $movies,
        ]);
    }
}
