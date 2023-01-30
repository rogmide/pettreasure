-- CREATE TABLE companies (
--   handle VARCHAR(25) PRIMARY KEY CHECK (handle = lower(handle)),
--   name TEXT UNIQUE NOT NULL,
--   num_employees INTEGER CHECK (num_employees >= 0),
--   description TEXT NOT NULL,
--   logo_url TEXT
-- );
CREATE TABLE users (
  username varchar(25) PRIMARY KEY,
  password TEXT NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL CHECK (position('@' IN email) > 1),
  is_admin boolean NOT NULL DEFAULT FALSE,
  zip_code integer
);

CREATE TABLE config (
  api_key text PRIMARY KEY,
  secret_key text NOT NULL,
  api_token text NOT NULL
);

CREATE TABLE favorite (
  user_id varchar(25) REFERENCES users ON DELETE CASCADE,
  pet_id integer,
  pet_info json NOT NULL,
  PRIMARY KEY (user_id, pet_id)
);

CREATE TABLE
CACHE (
  request_url text PRIMARY KEY,
  request_response json NOT NULL,
  request_time date NOT NULL
);

CREATE INDEX request_url ON
CACHE (request_url);

-- CREATE TABLE applications (
--   username VARCHAR(25)
--     REFERENCES users ON DELETE CASCADE,
--   job_id INTEGER
--     REFERENCES jobs ON DELETE CASCADE,
--   PRIMARY KEY (username, job_id)
-- );
