@extends('frontend.layouts.app')

@section('content')

    <div class="row">

        <div class="col-md-8 col-md-offset-2">

            <div class="panel panel-default" style="border-radius: none;">
                <div class="panel-heading">{{ trans('labels.frontend.auth.login_box_title') }}</div>

                <div class="panel-body">

                    {{ Form::open(['route' => 'frontend.auth.login', 'class' => 'form-horizontal']) }}

                    <div class="form-group has-feedback">
                        {{ Form::label('email', trans('validation.attributes.frontend.register-user.email'), ['class' => 'col-md-4 control-label']) }}
                        <div class="col-md-6">
                            {{ Form::input('email', 'email', null, ['class' => 'form-control', 'placeholder' => trans('validation.attributes.frontend.register-user.email')]) }}
                            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div><!--col-md-6-->
                    </div><!--form-group-->

                    <div class="form-group has-feedback">
                        {{ Form::label('password', trans('validation.attributes.frontend.register-user.password'), ['class' => 'col-md-4 control-label']) }}
                        <div class="col-md-6">
                            {{ Form::input('password', 'password', null, ['class' => 'form-control', 'placeholder' => trans('validation.attributes.frontend.register-user.password')]) }}
                            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div><!--col-md-6-->
                    </div><!--form-group-->

                    <div class="form-group has-feedback">
                        <div class="col-md-6 col-md-offset-4">
                            <div class="checkbox">
                                <label>
                                    {{ Form::checkbox('remember') }} {{ trans('labels.frontend.auth.remember_me') }}
                                </label>
                            </div>
                        </div><!--col-md-6-->
                    </div><!--form-group-->

                    <div class="form-group">
                        <div class="col-md-6 col-md-offset-4">
                            {{ Form::submit(trans('labels.frontend.auth.login_button'), ['class' => 'btn btn-danger', 'style' => 'margin-right:15px; background-color:#dd4b39; border:none;']) }}

                            {{ link_to_route('frontend.auth.password.reset', trans('labels.frontend.passwords.forgot_password'),
                             ['style' => 'color:#1f3860;']) }}
                        </div><!--col-md-6-->
                    </div><!--form-group-->

                    {{ Form::close() }}

                    <div class="row text-center">

                    </div>
                </div><!-- panel body -->

            </div><!-- panel -->

        </div><!-- col-md-8 -->

    </div><!-- row -->

@endsection