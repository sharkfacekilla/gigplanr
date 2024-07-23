@props(['url'])
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'GigPlanr')
<img src="img/logo-white.png" class="logo" alt="GigPlanr Logo" style="display: block; border: 0;"/>
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
