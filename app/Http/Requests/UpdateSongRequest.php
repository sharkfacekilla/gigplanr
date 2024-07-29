<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSongRequest extends FormRequest
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
            'title' => ['required', 'string'],
            'length' => ['required', 'integer'],
            'album' => ['required', 'string'],
            'album_cover' => ['nullable', 'string'],
            'album_track_number' => ['nullable', 'integer'],
            'bpm' => ['nullable', 'integer'],
            'key' => ['nullable', 'string'],
            'tuning' => ['nullable', 'string'],
            'cover' => ['nullable', 'boolean'],
            'metronome' => ['nullable', 'boolean'],
        ];
    }
}
