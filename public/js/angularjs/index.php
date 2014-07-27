<!DOCTYPE html>
<html ng-app lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width;initial-scale=1.0;maximum-scale=1.0;minimum-scale=1.0;user-scalable=no">
<title>test | AngularJS</title>
</head>
<body>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular.min.js"></script>
  
  <form novalidate name="myForm" method="get" action="get-angularjs.php">
    <p>名前:<input type="text" name="name" ng-model="name" required ng-minlength="2" ng-maxlength="5"></p>
    <p ng-show="myForm.name.$error.required">nameは未入力です</p>
    <p ng-show="myForm.name.$error.minlength">2文字以上入力してください</p>
    <p ng-show="myForm.name.$error.maxlength">5文字以内で入力してください</p>
    
    <input type="submit" value="送信する" ng-disabled="myForm.$invalid">
  </form>
</body>
</html>