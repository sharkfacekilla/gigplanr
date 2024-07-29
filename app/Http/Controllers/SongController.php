<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSongRequest;
use Inertia\Inertia;
use App\Models\Songs;
use Illuminate\Http\Request;
use App\Http\Resources\SongResource;

class SongController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = auth()->user()->id;
        $songs = Songs::where('user_id', $user_id)->orderBy('id', 'desc')->paginate(10)->onEachSide(1);
        return Inertia::render('Admin/Library/Index', [
            'songs' => SongResource::collection($songs)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSongRequest $request)
    {
        $data = $request->validated();
        $songs = $data['songs'];
        $user_id = auth()->user()->id;
        foreach ($songs as $song) {
            $song['user_id'] = $user_id;
            Songs::create($song);
        }
        return redirect()->route('library.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
