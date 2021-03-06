
-- ---
-- Table 'customers'
--
-- ---

DROP TABLE IF EXISTS "customers" CASCADE;

CREATE TABLE "customers" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "user_id" VARCHAR NULL DEFAULT NULL,
  "email" VARCHAR(50) NULL DEFAULT NULL,
  "first_name" VARCHAR(20) NULL DEFAULT NULL,
  "last_name" VARCHAR(20) NULL DEFAULT NULL,
  "address" VARCHAR NULL DEFAULT NULL,
  "city" VARCHAR(30) NULL DEFAULT NULL,
  "state" VARCHAR(20) NULL DEFAULT NULL,
  "zip_code" INTEGER NULL DEFAULT NULL,
  "referral_code" VARCHAR NULL DEFAULT NULL,
  "referral_code_used" VARCHAR NULL DEFAULT NULL,
  "first_purchase_complete" VARCHAR(15) NULL DEFAULT NULL,
  "credit_available" INTEGER NULL DEFAULT NULL,
  "nutritionist_status" VARCHAR NULL DEFAULT NULL
);

-- ---
-- Table 'farms'
--
-- ---

DROP TABLE IF EXISTS "farms" CASCADE;

CREATE TABLE "farms" (
"id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "user_id" INTEGER NULL DEFAULT NULL,
  "email" VARCHAR NULL DEFAULT NULL,
  "name" VARCHAR NULL DEFAULT NULL,
  "zip_code" INTEGER NULL DEFAULT NULL,
  "description" VARCHAR NULL DEFAULT NULL,
  "profile_image" VARCHAR NULL DEFAULT NULL,
  "farm_rating" INTEGER NULL DEFAULT NULL,
  "video_link" VARCHAR NULL DEFAULT NULL,
  "reviews_count" INTEGER NULL DEFAULT NULL
);

-- ---
-- Table 'products'
--
-- ---

DROP TABLE IF EXISTS "products" CASCADE;

CREATE TABLE "products" (
"id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "product_name" VARCHAR(100) NULL DEFAULT NULL,
  "product_description" VARCHAR NULL DEFAULT NULL,
  "product_cost" INTEGER NULL DEFAULT NULL,
  "product_inventory" INTEGER NULL DEFAULT NULL,
  "product_image" VARCHAR NULL DEFAULT NULL,
  "product_rating" INTEGER NULL DEFAULT NULL,
  "farm_id" INTEGER NULL DEFAULT NULL,
  "new field" INTEGER NULL DEFAULT NULL,
  "reviews_count" INTEGER NULL DEFAULT NULL
);

-- ---
-- Table 'transactions'
--
-- ---

DROP TABLE IF EXISTS "transactions" CASCADE;

CREATE TABLE "transactions" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "customer_id" INTEGER NULL DEFAULT NULL,
  "cost" INTEGER NULL DEFAULT NULL,
  "order_date" VARCHAR NULL DEFAULT NULL
);

-- ---
-- Table 'product_quantity'
--
-- ---

DROP TABLE IF EXISTS "product_quantity" CASCADE;

CREATE TABLE "product_quantity" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "product_id" INTEGER NULL DEFAULT NULL,
  "transaction_id" INTEGER NULL DEFAULT NULL,
  "quantity" INTEGER NULL DEFAULT NULL,
  "subscription_active" VARCHAR NULL DEFAULT NULL
);

-- ---
-- Table 'nutrition_facts'
--
-- ---

DROP TABLE IF EXISTS "nutrition_facts" CASCADE;

CREATE TABLE "nutrition_facts" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "product_id" INTEGER NULL DEFAULT NULL,
  "fact_type" VARCHAR NULL DEFAULT NULL,
  "fact_info" VARCHAR NULL DEFAULT NULL
);

-- ---
-- Table 'product_category'
--
-- ---

DROP TABLE IF EXISTS "product_category" CASCADE;

CREATE TABLE "product_category" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "category_name" VARCHAR NULL DEFAULT NULL,
  "productid" INTEGER NULL DEFAULT NULL
);

-- ---
-- Table 'messages'
--
-- ---

DROP TABLE IF EXISTS "messages" CASCADE;

CREATE TABLE "messages" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "user_id" VARCHAR NULL DEFAULT NULL,
  "message" VARCHAR NULL DEFAULT NULL,
  "response_status" INTEGER NULL DEFAULT NULL
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE "products" ADD FOREIGN KEY (farm_id) REFERENCES "farms" ("id");
ALTER TABLE "transactions" ADD FOREIGN KEY (customer_id) REFERENCES "customers" ("id");
ALTER TABLE "product_quantity" ADD FOREIGN KEY (product_id) REFERENCES "products" ("id");
ALTER TABLE "product_quantity" ADD FOREIGN KEY (transaction_id) REFERENCES "transactions" ("id");
ALTER TABLE "product_category" ADD FOREIGN KEY (productid) REFERENCES "products" ("id");
