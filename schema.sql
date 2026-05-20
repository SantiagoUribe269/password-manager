CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE vault (
    user_id INT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    master_salt BYTEA NOT NULL,
    master_hash BYTEA NOT NULL,
    encrypted_blob BYTEA NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);