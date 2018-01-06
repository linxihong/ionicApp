SET NAMES UTF8;
DROP DATABASE IF EXISTS jj;
CREATE DATABASE jj CHARSET=UTF8;
USE jj;

/*首页轮播广告商品*/
CREATE TABLE jj_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64)
);

/****首页轮播广告商品****/
INSERT INTO jj_index_carousel VALUES
(NULL, 'img/index/banner1.jpg','轮播广告商品1'),
(NULL, 'img/index/banner2.jpg','轮播广告商品2'),
(NULL, 'img/index/banner3.jpg','轮播广告商品3');

/****首页商品****/
CREATE TABLE jj_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128),
  seq_recommended TINYINT,
  seq_new_arrival TINYINT,
  seq_top_sale TINYINT
);
/****首页商品****/
INSERT INTO jj_index_product VALUES
(NULL, 'Apple MacBook Air系列', '酷睿双核i5处理器|256GB SSD|8GB内存|英特尔HD显卡620含共享显卡内存', 'img/index/study_computer_img1.png', 6988, 'product_details.html?lid=1', 1, 1, 1)


