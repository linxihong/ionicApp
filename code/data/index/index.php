<?php
/**
* 向首页提供必需的数据，包括轮播广告、首页推荐、最新上架、热销单品
* 返回数据形如：
  {
    carouselItems: [ ],
    recommendedItems: [ ],
    newArrialItems: [ ],
    topSaleItems: [ ]
  }
*/
header('Content-Type: application/json;charset=UTF-8');

$output = [];

require_once('../init.php');

//1.获取轮播广告项
$sql = "SELECT cid,img,title FROM jj_index_carousel";
$result = mysqli_query($conn, $sql);
$output['carouselItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);


//2.首页推荐商品
$sql = "SELECT pid,title,details,pic,price,href FROM jj_index_product WHERE seq_recommended>0 ORDER BY seq_recommended  LIMIT 6";
$result = mysqli_query($conn, $sql);
$output['recommendedItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);

//3.最新上架商品
$sql = "SELECT pid,title,details,pic,price,href FROM jj_index_product WHERE seq_new_arrival>0 ORDER BY seq_new_arrival LIMIT 6";
$result = mysqli_query($conn, $sql);
$output['newArrivalItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);

//4.热销商品
$sql = "SELECT pid,title,details,pic,price,href FROM jj_index_product WHERE seq_top_sale>0 ORDER BY seq_top_sale LIMIT 6";
$result = mysqli_query($conn, $sql);
$output['topSaleItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($output);



