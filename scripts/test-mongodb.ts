import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { resolve } from 'path';

// Load environment variables from .env file
dotenv.config({ path: resolve(process.cwd(), '.env') });

const MONGODB_URI = process.env.MONGODB_URI || '';

async function testMongoDBConnection() {
  console.log('🔍 Testing MongoDB Connection...\n');

  // Check if MONGODB_URI is set
  if (!MONGODB_URI) {
    console.error('❌ ERROR: MONGODB_URI is not set in .env file');
    console.log('\n💡 Please add MONGODB_URI to your .env file:');
    console.log('   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database\n');
    process.exit(1);
  }

  // Mask password in URI for display (security)
  const maskedURI = MONGODB_URI.replace(/:[^:@]+@/, ':****@');
  console.log(`📝 Connection String: ${maskedURI}\n`);

  try {
    console.log('⏳ Attempting to connect to MongoDB...\n');

    // Set connection options
    const options = {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
      socketTimeoutMS: 45000,
    };

    // Attempt connection
    await mongoose.connect(MONGODB_URI, options);

    console.log('✅ SUCCESS: Connected to MongoDB!\n');

    // Get connection info
    const connection = mongoose.connection;
    console.log('📊 Connection Details:');
    console.log(`   Host: ${connection.host}`);
    console.log(`   Port: ${connection.port}`);
    console.log(`   Database: ${connection.name}`);
    console.log(`   Ready State: ${connection.readyState === 1 ? 'Connected' : connection.readyState}\n`);

    // Test database operations
    console.log('🧪 Testing database operations...\n');

    // List all databases
    if (!connection.db) {
      throw new Error('Database connection is not available');
    }
    
    const adminDb = connection.db.admin();
    const databases = await adminDb.listDatabases();
    console.log(`✅ Found ${databases.databases.length} database(s)`);

    // Check if we can access the current database
    const dbName = connection.db.databaseName;
    const collections = await connection.db.listCollections().toArray();
    console.log(`✅ Database "${dbName}" is accessible`);
    console.log(`✅ Found ${collections.length} collection(s) in database\n`);

    // Close connection
    await mongoose.connection.close();
    console.log('✅ Connection closed successfully\n');
    console.log('🎉 MongoDB connection test PASSED!\n');

    process.exit(0);
  } catch (error) {
    console.error('\n❌ ERROR: Failed to connect to MongoDB\n');
    console.error('Error Details:');
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`   Message: ${errorMessage}\n`);

    // Provide helpful error messages based on common issues
    if (error.message.includes('authentication failed')) {
      console.log('💡 Possible Issues:');
      console.log('   - Incorrect username or password in connection string');
      console.log('   - Database user may not exist or password is wrong');
      console.log('   - Make sure you replaced <password> in the connection string\n');
    } else if (error.message.includes('ENOTFOUND') || error.message.includes('getaddrinfo')) {
      console.log('💡 Possible Issues:');
      console.log('   - Invalid cluster hostname in connection string');
      console.log('   - Check your MongoDB Atlas cluster URL\n');
    } else if (error.message.includes('IP')) {
      console.log('💡 Possible Issues:');
      console.log('   - Your IP address is not whitelisted in MongoDB Atlas');
      console.log('   - Go to MongoDB Atlas → Network Access → Add IP Address');
      console.log('   - For development, you can use 0.0.0.0/0 (allows all IPs)\n');
    } else if (error.message.includes('timeout')) {
      console.log('💡 Possible Issues:');
      console.log('   - Network connectivity issues');
      console.log('   - Firewall blocking connection');
      console.log('   - MongoDB Atlas cluster may be paused (free tier)\n');
    } else {
      console.log('💡 Troubleshooting Steps:');
      console.log('   1. Verify your connection string format');
      console.log('   2. Check MongoDB Atlas cluster status');
      console.log('   3. Ensure your IP is whitelisted');
      console.log('   4. Verify database user credentials\n');
    }

    process.exit(1);
  }
}

// Run the test
testMongoDBConnection();

