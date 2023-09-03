const mongoose = require('mongoose');
function DbConnect() {
    const DB_URL = process.env.DB_URL;
    // Database connection
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('DB connected...');
    });

    try {
        // Ping the database
        mongoose.connection.client.db("admin").command({ ping: 1 });
        console.log('Pinged the database. You successfully connected to MongoDB!');
      } catch (error) {
        console.error('Failed to ping the database:', error);
      } finally {
        mongoose.connection.client.close();
      }
}

module.exports = DbConnect;