
	        // 修改图片src属性
	        var number = 1;
	        function fun(){
	            number ++ ;
	            // 判断number是否大于3
	            if(number > 3){
	                number = 1;
	            }
	            // 获取img对象
	            var img = document.getElementById("img");
	            img.src = "./img/t"+number+".png";
	        }
	
	        // 2.定义定时器
	        setInterval(fun,3000);
