$(function(){
	$.each(car,function(index,data){
		var carProduct = `<div class="longBoxContentLi l">
						<div class="longBoxContentLiImg">
							<img src="${data.src1}"/>
						</div>
						<div class="longBoxContentLiInfo">
							<div class="infoTag">${data.name1}</div>
							<div class="infoName">${data.name2}</div>
							<div class="infoPrice">${data.price}</div>
						</div>
					</div>`			
	})
	//add and minus the num of product and count
	$('.itemInfoUnion2ModuleI2').click(function(){
		var add = $('.itemInfoUnion2ModuleI2').index(this);
		console.log(add)
		var val = $('.itemInfoUnion2ModuleNum').eq(add).val();
		console.log('+++++++'+val)
		val++
		var SumPrice = $('.sumNum').eq(add).text();
		var UnitPrice = $('.itemInfoUnionPice').eq(add).text();
		console.log(SumPrice,UnitPrice)
		var price = val*UnitPrice+'.00';
		console.log(price)
		$('.sumNum').eq(add).text(price);
		$('.itemInfoUnion2ModuleI1').eq(add).css('color','#474747');
		$('.itemInfoUnion2ModuleNum').eq(add).val(val);
	})
	
	$('.itemInfoUnion2ModuleI1').click(function(){
		var min = $('.itemInfoUnion2ModuleI1').index(this);
		console.log(min)
		var val = $('.itemInfoUnion2ModuleNum').eq(min).val();
		val--;
		console.log('------'+val)
		if(val<2){
			val = 1;
			$('.itemInfoUnion2ModuleI1').eq(min).css('color','#bdbdbd');
		}
		var SumPrice = $('.sumNum').eq(min).text();
		var UnitPrice = $('.itemInfoUnionPice').eq(min).text();
		console.log(SumPrice,UnitPrice)
		var price = val*UnitPrice+'.00';
		console.log('------'+price);
		$('.itemInfoUnion2ModuleNum').eq(min).val(val);
		$('.sumNum').eq(min).text(price);
	})
	
	//delete
	$('.delete').click(function(){
		var a = confirm('DO YOU WANT TO DELETE IT？')
		if(a==true){
			var index = $('.delete').index(this);
			console.log(index)
			$('.productBodyItemContent').eq(index).remove() 
		}else{
			console.log(111);
		}
	})
	//All clear
	$('.checkBox').click(function(){
		var index = $('.checkBox').index(this);
		console.log(index)
		if(index==0||index==4){
			$('.checkBox').toggleClass('checkIcon checktoggle')
		}else{
			$('.checkBox').eq(index).toggleClass('checktoggle checkIcon')
		}
		$('.allDelete').click(function(){
			if(index==0||index==4){
				var b = confirm('DO YOU WANT TO CLEAR ALL THE SELECTIONS？')
				if(b==true){
					console.log(index)
						$('.productBodyItemContent').remove() 
				}else{console.log(11111)} 
			}else{
				var a = confirm('DO YOU WANT TO DELETE IT？')
				var alldelete = index-1;
				if(a==true){
					console.log(alldelete)
					$('.productBodyItemContent').eq(alldelete).remove() 
				}else{
					console.log(222);
				}
			}	
		})
		
	})
})	
