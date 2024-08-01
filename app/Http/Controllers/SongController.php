<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Songs;
use Illuminate\Http\Request;
use App\Http\Resources\SongResource;
use App\Http\Requests\StoreSongRequest;
use App\Http\Requests\UpdateSongRequest;
use App\Http\Requests\StoreNewSongRequest;

class SongController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = auth()->user()->id;
        $songs = Songs::where('user_id', $user_id)->orderBy('id', 'desc')->get();
        return Inertia::render('Setlist', [
            'songs' => ['data' => $songs]
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

    public function storeNew(StoreNewSongRequest $request) 
    {
        $data = $request->validated();
        $data['user_id'] = auth()->user()->id;
        if ($request->hasFile('album_cover')) {
            $file = $request->file('album_cover');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path(), $filename);
            $data['album_cover'] = $filename;    
        }
        Songs::create($data);
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
    public function update(UpdateSongRequest $request, Songs $song)
    {        
        $data = $request->validated();
        // dd($request->hasFile('album_cover'));
        // if ($request->hasFile('album_cover')) {
        //     $file = $request->file('album_cover');
        //     $filename = time() . '_' . $file->getClientOriginalName();
        //     $file->move(public_path(), $filename);
        //     $data['album_cover'] = $filename;    
        // }
        // dd($data);
        $song->update($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
