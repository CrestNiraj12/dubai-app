@extends('main')

@section('title', 'Downloads')

@section('stylesheets')

@endsection


@section('content')

<section class="breadcrumbs-area bg-3 ptb-110 bg-opacity bg-relative">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="breadcrumbs">
                    <h2 class="page-title">File Downloads</h2>
                    <ul>
                        <li>
                            <a class="active" href="/">Home</a>
                        </li>
                        <li>Downloads</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="about-area pt-10" style="margin:50px 0px;">
    <div class="container">
        <div class="row">
            <div class="col-md-12"><br /><br />
                <table
                    style="border-collapse: collapse; border-spacing: 0px; background-color: transparent; font-family: arial, sans-serif; width: 100%;">
                    <tbody style="box-sizing: border-box;">
                        <tr style="box-sizing: border-box; background-color: #5a9bd5; color: #ffffff;">
                            <th style="box-sizing: border-box; padding: 8px; border: 1px solid #e2eaf0;">
                            </th>
                            <th
                                style="box-sizing: border-box; padding: 8px; text-align: left; border: 1px solid #e2eaf0;">
                                Filename
                            </th>
                            <th
                                style="box-sizing: border-box; padding: 8px; text-align: left; border: 1px solid #e2eaf0;">
                                Category</th>
                            <th
                                style="box-sizing: border-box; padding: 8px; text-align: left; border: 1px solid #e2eaf0;width:100px">

                            </th>
                        </tr>
                        @if (count($files) > 0)
                        @foreach ($files as $file)
                        <tr style="box-sizing: border-box; background-color: #e2eaf0;">
                            <td style="width: 40px;text-align:center;">{{ $loop->index+1 }}.</td>
                            <td style="box-sizing: border-box; padding: 8px; border: 1px solid #e2eaf0;">
                                {{ $file['name'] }}
                            </td>
                            <td style="box-sizing: border-box; padding: 8px; border: 1px solid #e2eaf0;">
                                {{ $file['file_category']['title'] }}</td>
                            <td style="box-sizing: border-box; padding: 8px; border: 1px solid #e2eaf0;"><a
                                    class="button extra-small mb-0" style="padding:10px" tabindex="0"
                                    href="/storage/{{ $file['file_path'] }}">Download</td>
                        </tr>
                        @endforeach
                        @else
                        <tr style="box-sizing: border-box; background-color: #e2eaf0;">
                            <td style="width: 40px;text-align:center;padding: 8px;" colspan="4">No files available!</td>
                        </tr>
                        @endif

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section> @endsection