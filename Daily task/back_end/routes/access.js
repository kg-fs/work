import express from 'express';
import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
import 'dotenv/config';

const router = express.Router();

// Configura Passport
passport.serializeUser((user, done) => {
  console.log('Serializing user:', user.id);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  try {
    console.log('Deserializing user with ID:', id);
    if (!id) {
      console.log('No user ID in session');
      return done(null, null);
    }
    const user = { id };
    done(null, user);
  } catch (err) {
    console.error('Deserialize error:', err);
    done(err);
  }
});

// Estrategia de GitHub
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/github/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    console.log('GitHub profile:', profile);
    const user = {
      id: profile.id,
      username: profile.username,
      email: profile.emails ? profile.emails[0].value : null,
      accessToken
    };
    return done(null, user);
  } catch (err) {
    console.error('GitHub strategy error:', err);
    return done(err);
  }
}));

// Rutas de auth
router.get('/github', passport.authenticate('github', { scope: ['user:email'], prompt: 'select_account' }));

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/auth/login' }),
  (req, res) => {
    console.log('Callback success, user:', req.user);
    res.json({ message: 'Autenticación exitosa', user: req.user });
    
  }
);

router.get('/profile', (req, res, next) => {
  console.log('Profile request, isAuthenticated:', req.isAuthenticated());
  if (!req.isAuthenticated()) {
    return res.redirect('/auth/github');
  }
  res.json({ user: req.user });
});

router.get('/logout', (req, res, next) => {
  console.log('Logout initiated, session:', req.session);
  req.logout((err) => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ error: 'Error al cerrar sesión' });
    }
    req.session.destroy((err) => {
      if (err) {
        console.error('Session destroy error:', err);
        return res.status(500).json({ error: 'Error al destruir sesión' });
      }
      console.log('Session destroyed, clearing cookie');
      res.clearCookie('connect.sid', { path: '/', httpOnly: true, sameSite: 'lax' });
      res.redirect('/');
    });
  });
});

router.get('/login', (req, res) => {
  res.json({ message: 'Por favor, inicia sesión con GitHub en /auth/github' });
});

export default router;