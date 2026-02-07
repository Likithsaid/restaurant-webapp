const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { Pool } = require('pg');

const PORT = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'restaurant_db',
    password: 'Teju@123',
    port: 5432,
});

pool.connect((err, client, release) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to PostgreSQL database');
        release();
    }
});

const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    if (req.url.startsWith('/public/')) {
        serveStaticFile(req, res);
        return;
    }

    if (pathname === '/api/products' && method === 'GET') {
        try {
            const result = await pool.query('SELECT * FROM products ORDER BY id');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result.rows));
        } catch (err) {
            console.error('Error fetching products:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        }
        return;
    }

    if (pathname === '/api/orders' && method === 'GET') {
        try {
            const result = await pool.query(`
                SELECT 
                    o.id, 
                    o.total_amount, 
                    o.status, 
                    o.created_at, 
                    u.first_name, 
                    u.last_name, 
                    u.address, 
                    u.address2, 
                    u.phone, 
                    u.alternate_phone,
                    COALESCE(
                        json_agg(
                            json_build_object(
                                'product_id', p.id,
                                'product_name', p.name,
                                'quantity', oi.quantity,
                                'price', oi.price
                            )
                        ) FILTER (WHERE p.id IS NOT NULL),
                        '[]'
                    ) as items
                FROM orders o
                JOIN users u ON o.user_id = u.id
                LEFT JOIN order_items oi ON o.id = oi.order_id
                LEFT JOIN products p ON oi.product_id = p.id
                GROUP BY o.id, u.id
                ORDER BY o.created_at DESC
            `);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result.rows));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        }
        return;
    }

    if (pathname.startsWith('/api/orders/') && pathname.includes('/confirm') && method === 'POST') {
        try {
            const parts = pathname.split('/');
            const orderId = parts[3];

            const result = await pool.query(
                'UPDATE orders SET status = $1 WHERE id = $2 RETURNING *',
                ['confirmed', orderId]
            );

            if (result.rows.length === 0) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Order not found' }));
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    success: true,
                    message: 'Order confirmed successfully',
                    order: result.rows[0]
                }));
            }
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        }
        return;
    }

    if (pathname.startsWith('/api/orders/') && pathname.includes('/reject') && method === 'POST') {
        try {
            const parts = pathname.split('/');
            const orderId = parts[3];

            const result = await pool.query(
                'UPDATE orders SET status = $1 WHERE id = $2 RETURNING *',
                ['rejected', orderId]
            );

            if (result.rows.length === 0) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Order not found' }));
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    success: true,
                    message: 'Order rejected successfully',
                    order: result.rows[0]
                }));
            }
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        }
        return;
    }

    if (pathname.startsWith('/api/orders/') && pathname.includes('/delivered') && method === 'POST') {
        try {
            const parts = pathname.split('/');
            const orderId = parts[3];

            const result = await pool.query(
                'UPDATE orders SET status = $1 WHERE id = $2 RETURNING *',
                ['delivered', orderId]
            );

            if (result.rows.length === 0) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Order not found' }));
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    success: true,
                    message: 'Order marked as delivered',
                    order: result.rows[0]
                }));
            }
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        }
        return;
    }

    if (pathname.startsWith('/api/orders/') && pathname.includes('/not-received') && method === 'POST') {
        try {
            const parts = pathname.split('/');
            const orderId = parts[3];

            const result = await pool.query(
                'UPDATE orders SET status = $1 WHERE id = $2 RETURNING *',
                ['not_received', orderId]
            );

            if (result.rows.length === 0) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Order not found' }));
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    success: true,
                    message: 'Order marked as not received',
                    order: result.rows[0]
                }));
            }
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        }
        return;
    }

    if (pathname === '/api/items' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            try {
                const data = JSON.parse(body);
                const result = await pool.query(
                    `INSERT INTO products (name, description, price, category, image_url) 
                     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
                    [data.name, data.description, data.price, data.category, data.image_url || '']
                );
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    success: true,
                    message: 'Item added successfully',
                    product: result.rows[0]
                }));
            } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
            }
        });
        return;
    }

    if (pathname === '/api/submit-order' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            try {
                const orderData = JSON.parse(body);

                if (!orderData.cartItems || orderData.cartItems.length === 0) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Cart is empty' }));
                    return;
                }

                const client = await pool.connect();
                try {
                    await client.query('BEGIN');

                    const userResult = await client.query(
                        `INSERT INTO users (first_name, last_name, address, address2, phone, alternate_phone) 
                         VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
                        [
                            orderData.firstName || 'Customer',
                            orderData.lastName || 'Customer',
                            orderData.address || 'Not provided',
                            orderData.address2 || '',
                            orderData.phone || '000-000-0000',
                            orderData.alternatePhone || ''
                        ]
                    );
                    const userId = userResult.rows[0].id;

                    let subtotal = 0;
                    for (const item of orderData.cartItems) {
                        subtotal += (parseFloat(item.price) || 0) * (parseInt(item.quantity) || 1);
                    }

                    const deliveryFee = 5.00;
                    const discount = 5.00;
                    const total = subtotal + deliveryFee - discount;

                    const orderResult = await client.query(
                        `INSERT INTO orders (user_id, total_amount, status) 
                         VALUES ($1, $2, $3) RETURNING id`,
                        [userId, total, 'pending']
                    );
                    const orderId = orderResult.rows[0].id;

                    for (const item of orderData.cartItems) {
                        await client.query(
                            `INSERT INTO order_items (order_id, product_id, quantity, price) 
                             VALUES ($1, $2, $3, $4)`,
                            [orderId, item.id, item.quantity || 1, item.price || 0]
                        );
                    }

                    await client.query('COMMIT');

                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        success: true,
                        message: 'Order submitted successfully! Awaiting admin confirmation.',
                        orderId: orderId
                    }));
                } catch (err) {
                    await client.query('ROLLBACK');
                    throw err;
                } finally {
                    client.release();
                }
            } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    error: 'Failed to submit order: ' + err.message
                }));
            }
        });
        return;
    }

    if (pathname === '/api/order-status' && method === 'GET') {
        const orderId = parsedUrl.query.orderId;
        if (!orderId) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Order ID required' }));
            return;
        }

        try {
            
            const orderResult = await pool.query(`
                SELECT 
                    o.*, 
                    u.first_name, 
                    u.last_name, 
                    u.address, 
                    u.address2, 
                    u.phone, 
                    u.alternate_phone
                FROM orders o
                JOIN users u ON o.user_id = u.id
                WHERE o.id = $1
            `, [orderId]);

            if (orderResult.rows.length === 0) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Order not found' }));
                return;
            }

            const order = orderResult.rows[0];
            
            const itemsResult = await pool.query(`
                SELECT 
                    oi.id,
                    oi.product_id,
                    oi.quantity,
                    oi.price,
                    p.name as product_name,
                    p.description,
                    p.image_url
                FROM order_items oi
                LEFT JOIN products p ON oi.product_id = p.id
                WHERE oi.order_id = $1
            `, [orderId]);

            order.items = itemsResult.rows;

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(order));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        }
        return;
    }

    if (pathname === '/api/admin/login' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            try {
                const { email, password } = JSON.parse(body);
                const result = await pool.query(
                    'SELECT * FROM admin WHERE email = $1 AND password = $2',
                    [email, password]
                );

                if (result.rows.length > 0) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        success: true,
                        message: 'Login successful'
                    }));
                } else {
                    res.writeHead(401, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        success: false,
                        message: 'Invalid credentials'
                    }));
                }
            } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
            }
        });
        return;
    }

    if (pathname === '/api/cart' && method === 'GET') {
        const sessionId = parsedUrl.query.sessionId;
        try {
            let result;
            if (sessionId) {
                result = await pool.query(`
                    SELECT c.*, p.name, p.price, p.image_url
                    FROM cart c
                    JOIN products p ON c.product_id = p.id
                    WHERE c.session_id = $1
                `, [sessionId]);
            } else {
                result = { rows: [] };
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result.rows));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        }
        return;
    }

    if (pathname === '/api/cart' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            try {
                const { sessionId, productId, quantity } = JSON.parse(body);

                const existing = await pool.query(
                    'SELECT * FROM cart WHERE session_id = $1 AND product_id = $2',
                    [sessionId, productId]
                );

                if (existing.rows.length > 0) {
                    await pool.query(
                        'UPDATE cart SET quantity = quantity + $1 WHERE session_id = $2 AND product_id = $3',
                        [quantity, sessionId, productId]
                    );
                } else {
                    await pool.query(
                        'INSERT INTO cart (session_id, product_id, quantity) VALUES ($1, $2, $3)',
                        [sessionId, productId, quantity]
                    );
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
            } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
            }
        });
        return;
    }

    if (pathname === '/api/cart/clear' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            try {
                const { sessionId } = JSON.parse(body);
                await pool.query('DELETE FROM cart WHERE session_id = $1', [sessionId]);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
            } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
            }
        });
        return;
    }

    const pageRoutes = {
        '/': 'pages/index.html',
        '/menu': 'pages/menu.html',
        '/product': 'pages/product.html',
        '/cart': 'pages/cart.html',
        '/user-details': 'pages/user-details.html',
        '/order': 'pages/order.html',
        '/admin': 'pages/admin.html',
        '/admin-add-item': 'pages/admin-add-item.html',
        '/login': 'pages/login.html',
        '/help': 'pages/help.html',
        '/about': 'pages/about.html',
        '/bulk-order.html': 'pages/bulk-order.html'

    };

    const filePath = pageRoutes[pathname];
    if (filePath) {
        serveHTML(filePath, res);
    } else {
        serveHTML('pages/index.html', res);
    }
});

function serveStaticFile(req, res) {
    const filePath = path.join(__dirname, req.url);
    const extname = path.extname(filePath);
    const contentType = getContentType(extname);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
}

function serveHTML(filePath, res) {
    const fullPath = path.join(__dirname, filePath);
    fs.readFile(fullPath, 'utf8', (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>Page not found</h1>');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
}

function getContentType(extname) {
    const types = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg'
    };
    return types[extname] || 'application/octet-stream';
}

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Admin login: admin@restaurant.com / admin123`);
});