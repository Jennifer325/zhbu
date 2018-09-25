function register(){
			var username = document.getElementById("name").value;
			var user_mail = document.getElementById("mail").value;
			var user_pwd = document.getElementById("pwd").value;
			var user_repwd = document.getElementById("repwd").value;
			var flag = true;
			
			var emailLength = user_mail.length;
			var index1 = user_mail.indexOf("@");
			var index2 = user_mail.indexOf(".",index1);
		
			if(username==""){
				var infor1 = document.getElementById("u_name");
				infor1.value = "Username can't be null!";
				flag =false;
			}
			if(user_pwd==""){
				var infor2 = document.getElementById("u_pwd");
				infor2.value = "Password can't be null!";
				flag =false;
			}
			if(user_pwd!=user_repwd){
				var infor3 = document.getElementById("u_repwd");
				infor3.value = "Enter the  password twice inconsistent!";
				flag =false;
			}
			if(user_mail==""){
				var infor4 = document.getElementById("u_mail");
				infor4.value = "E-mail can't be null!";
				flag =false;
			}
			else{
				if(index1==-1||index2==-1||index2<=index1+1 || index1==0|| index2==emailLength-1){
					var infor4 = document.getElementById("u_mail");
					infor4.value = "E-mail address is not valid!"
					flag =false;
				}
			}
			if(flag==true){
				alert("You have successfully registered!");
				return flag;
			}else{
				return flag;
			}
			
}


var uname = document.getElementById("name").value;
var upwd = document.getElementById("pwd").value;

function che_login(){
	var uname = document.getElementById("name").value;
	var upwd = document.getElementById("pwd").value;

	if(uname=="王倩"&&upwd==123){
         return true;
	}else{
		if(uname=="王明艳"&&upwd==123){
	         return true;
		}else{
			if(uname=="薛婷"&&upwd==123){
		         return true;
			}else{
				if(uname=="李均"&&upwd==123){
			         return true;
				}else{
					if(uname=="张晓梅"&&upwd==123){
				         return true;
					}else{
						if(uname=="吕杰"&&upwd==123){
					         return true;
						}else{
							if(uname=="王丽萍"&&upwd==123){
						         return true;
							}else{
								if(uname=="赵兵彬"&&upwd==123){
							         return true;
								}else{
									if(uname=="赵一帆"&&upwd==123){
								         return true;
									}else{
										alert("Username or password is wrong,please check them!");
										return false;
									}
									
								}
								
							}
							
						}
						
					}
				}
			}
			
		}
	}
}



