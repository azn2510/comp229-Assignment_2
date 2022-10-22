import express from 'express'; 
import passport from 'passport';
import User from '../models/user.js';
import { UserDisplayName } from '../utils/index.js';

export function DisplayLoginPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) });
    }

    return res.redirect('/home');
}

export function DisplayRegisterPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req) });
    }

    return res.redirect('/home');
}

export function ProcessLoginPage(req, res, next){
    passport.authenticate('local', (err, user, info) => {
        if(err){
            console.error(err);
            return next(err);
        }

        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.login(user, (err) => {
            if(err){
                console.error(err);
                return next(err);
            }

            return res.redirect('/contact-list');
        });
    })(req, res, next);
}

export function ProcessRegisterPage(req, res, next){
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.firstName + " " + req.body.lastName
    });

    User.register(newUser, req.body.password, (err) => {
        if(err){
            if(err.name == "UserExistsError"){
            console.error('Error: Inserting New User');
            req.flash('registerMessage', 'Registration Error')
            }else {
                console.error(err.name);
                req.flash('registerMessage', 'Server Error')
            }
            return res.redirect('/register');
        }

        return passport.authenticate('local')(req, res, () => {
            return res.redirect('/home');
        });
    });
}

export function ProcessLogoutPage(req, res, next){
    req.logout(function(err){
        if(err){
            console.error(err);
            res.end(err);
        }
        console.log('User logged out');
    });
    res.redirect('/login');
}