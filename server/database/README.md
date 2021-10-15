# Export Postgres Database for Sequelize ORM

## Context:
 - PostgreSQL running locally (PORT: 5432)
 - Postgres: (user: postgres, database: postgres, password: example)
 - Multiple tables:
   - style
   - product
   - skus

## Command
In project root directory run:

`npx sequelize-auto -h 127.0.0.1 -d postgres -u postgres -x example -p
5432  --dialect postgres -c <rootDir>/server/config/db.config.js -o <rootDir>/server/database/models -t style product skus`