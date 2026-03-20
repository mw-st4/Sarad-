#!/bin/bash
# Install dependencies
npm install

# Create .env file
if [ ! -f .env ]; then
    echo 'DATABASE_URL=your_database_url' > .env
fi

# Run database migrations
npm run migrate

# Seed data
npm run seed