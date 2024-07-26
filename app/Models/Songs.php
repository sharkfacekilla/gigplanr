<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Songs extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'length',
        'artist',
        'album',
        'album_cover',
        'album_track_number',
        'bpm',
        'key',
        'tuning',
        'cover',
        'metronome'
    ];
}
