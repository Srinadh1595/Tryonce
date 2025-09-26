import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import salesRoutes from './routes/salesRoutes.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(morgan('dev'));
app.use(cors({
  origin(origin, callback) {
    const allowedExact = [process.env.CLIENT_URL].filter(Boolean);
    if (!origin) return callback(null, true);
    if (allowedExact.includes(origin)) return callback(null, true);
    if (/^http:\/\/localhost:\d+$/.test(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Static uploads directory for local storage
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Root landing page (valid HTML) for http://localhost:5000
app.get('/', (_req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8');
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Try Once API</title>
      <style>
        body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#e2e8f0;min-height:100vh;}
        .wrap{max-width:720px;margin:0 auto;padding:48px 20px}
        .card{background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.2);border-radius:20px;padding:32px;box-shadow:0 8px 32px rgba(0,0,0,0.1)}
        .logo{display:flex;align-items:center;gap:12px;margin-bottom:24px}
        .logo-icon{width:48px;height:48px;background:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:24px;color:#667eea}
        .title{font-size:2.5rem;font-weight:bold;margin:0;background:linear-gradient(45deg,#fff,#e2e8f0);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .subtitle{font-size:1.2rem;opacity:0.9;margin:16px 0 32px}
        a{color:#60a5fa;text-decoration:none;transition:all 0.2s}
        a:hover{color:#93c5fd;text-decoration:underline}
        .links{display:flex;gap:16px;margin-top:24px;flex-wrap:wrap}
        .api-link{background:rgba(255,255,255,0.1);padding:12px 16px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);transition:all 0.2s}
        .api-link:hover{background:rgba(255,255,255,0.2);transform:translateY(-2px)}
        code{background:rgba(0,0,0,0.3);padding:4px 8px;border-radius:8px;font-family:monospace}
        .status{display:inline-block;width:12px;height:12px;background:#10b981;border-radius:50%;margin-right:8px;animation:pulse 2s infinite}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}
      </style>
    </head>
    <body>
      <div class="wrap">
        <div class="card">
          <div class="logo">
            <div class="logo-icon">T</div>
            <div>
              <h1 class="title">Try Once</h1>
              <p class="subtitle">E-commerce Platform API</p>
            </div>
          </div>
          
          <div style="margin-bottom:24px">
            <span class="status"></span>
            <strong>Backend is running successfully!</strong>
          </div>
          
          <p style="margin-bottom:24px;line-height:1.6">
            Welcome to the Try Once API server. This backend provides all the necessary endpoints for our e-commerce platform, including product management, user authentication, and order processing.
          </p>
          
          <div class="links">
            <a href="/api/health" class="api-link">GET /api/health</a>
            <a href="/api/products" class="api-link">GET /api/products</a>
            <a href="/api/products/categories" class="api-link">GET /api/products/categories</a>
          </div>
          
          <div style="margin-top:32px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.2)">
            <p style="margin:0;font-size:0.9rem;opacity:0.8">
              Frontend runs on <code>http://localhost:5176</code> (or your Vite port).
            </p>
          </div>
        </div>
      </div>
    </body>
  </html>`);
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/sales', salesRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;


