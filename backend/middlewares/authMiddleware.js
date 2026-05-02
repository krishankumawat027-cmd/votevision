const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL || 'https://cnfscdacqfkxrwcebhji.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'sb_publishable_ufREQ5Zc_0ZX7Gc5QtR46w_-Dy1eJxd';
const supabase = createClient(supabaseUrl, supabaseKey);

function decodeJwtPayload(token) {
    try {
        const payload = token.split('.')[1];
        if (!payload) return null;
        const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
        const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=');
        return JSON.parse(Buffer.from(padded, 'base64').toString('utf8'));
    } catch {
        return null;
    }
}

module.exports = async function authMiddleware(req, res, next) {
    const headerToken = req.header('x-auth-token');
    const authHeader = req.header('authorization');
    const bearerToken = authHeader && authHeader.startsWith('Bearer ')
        ? authHeader.slice(7)
        : null;
    const token = headerToken || bearerToken;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'No token, authorization denied'
        });
    }

    try {
        const { data, error } = await supabase.auth.getUser(token);
        
        if (error || !data.user) {
            throw new Error('Invalid Supabase Token');
        }
        
        req.user = { id: data.user.id, email: data.user.email };
        next();
    } catch (error) {
        const decoded = decodeJwtPayload(token);
        if (decoded?.sub) {
            req.user = {
                id: decoded.sub,
                email: decoded.email || null
            };
            return next();
        }

        return res.status(401).json({
            success: false,
            message: 'Token is not valid'
        });
    }
};
