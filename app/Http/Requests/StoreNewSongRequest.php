<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreNewSongRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255', 'min:1'],
            'length' => ['required', 'integer', 'min:1'],
            'artist' => ['nullable', 'string', 'max:255', 'min:1'],
            'album' => ['nullable', 'string', 'max:255', 'min:1'],
            'album_cover' => ['nullable', 'image', 'mimes:jpeg,png,jpg'],
            'album_track_number' => ['nullable', 'integer', 'max:255'],
            'bpm' => ['nullable', 'integer'],
            'key' => ['nullable', 'string', 'max:255'],
            'tuning' => ['nullable', 'string', 'max:255'],
            'cover' => ['nullable', 'boolean'],
            'metronome' => ['nullable', 'boolean'],
            'status' => ['nullable', 'string'],
        ];
    }
}
