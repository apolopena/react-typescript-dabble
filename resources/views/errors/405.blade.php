@extends('errors::minimal')

@section('title', __('Method Not Allowed'))
@section('code', '405')
@section('message', __($exception->getMessage() ?: 'Method Not Allowed'))
