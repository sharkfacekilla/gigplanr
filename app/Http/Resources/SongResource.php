<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SongResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'title' => $this->title,
            'length' => $this->length,
            'artist' => $this->artist,
            'album' => $this->album,
            'album_cover' => $this->album_cover,
            'album_track_number' => $this->album_track_number,
            'bpm' => $this->bpm,
            'key' => $this->key,
            'tuning' => $this->tuning,
            'cover' => $this->cover,
            'metronome' => $this->metronome,
            'status' => $this->status,
        ];
    }
};
