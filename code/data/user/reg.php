<?php
/**
* 接收客户端
*/
header('Content-Type: application/json;charset=UTF-8');
require_once('../init.php');
@$uname = $_REQUEST['uname'] or die('{"code":401,"msg":"uname required"}');
@$upwd = $_REQUEST['upwd'] or die('{"code":402,"msg":"upwd required"}');


$sql = "INSERT INTO jj_user(uname,upwd) VALUES('$uname','$upwd')";
$result = mysqli_query($conn,$sql);

if(!$result){
  echo('{"code":500, "msg":"注册失败"}');
}else {
  $uid = mysqli_insert_id($conn);
  echo('{"code":200, "msg":"注册成功", "uid":'.$uid.'}');
}