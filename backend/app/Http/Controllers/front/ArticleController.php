<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Article; // Import the Article model
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        // Fetch articles ordered by creation date, where the status is 1
        $articles = Article::orderBy('created_at', 'DESC')
            ->where('status', 1)
            ->get();

        return response()->json([
            'status' => true,
            'data' => $articles
        ]);
    }

    public function latestArticles(Request $request)
    {
        // Validate the 'limit' parameter to ensure it's a valid integer and greater than 0
        $request->validate([
            'limit' => 'required|integer|min:1', // Validation rule for limit
        ]);

        // Fetch the latest articles, with the limit specified by the user
        $articles = Article::orderBy('created_at', 'DESC')
            ->where('status', 1)
            ->limit($request->limit)
            ->get();

        return response()->json([
            'status' => true,
            'data' => $articles
        ]);
    }
}
