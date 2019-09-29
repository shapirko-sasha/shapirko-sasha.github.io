//шибениця
	var words=["bones","system","skin","fish","energy","meat","body","eyes","snow","sun","rain","oceans","whale","president","nurse","writer","unicorn","dragon","mermaid","fairy"]
	var que=["Calcium from milk and cheese helps keep our ...","The brain commands our nervous ... ","Nuts and cereals are good for our ...","Circle the odd word out:  cereal - fish - bread - pasta","Circle the odd word out:  energy - skin - muscle - skeleton","Circle the odd word out:  milk - meat - youghurt - cheese","Circle the odd word out:  fruit - vegetables - nuts - body","Circle the odd word out:  heart - eyes - calcium - liver","this is white.You can see it in winter.","In summer you sunbathe under it","in outum happands very often and that water falling from the sky","there are four of these in the world","A large mammal that lives in the sea","this person is the leader of a country(in us was be new in march)","This person takes care of sick people","This person write books and stories","this creature looks like a horse with a horn on its head","fire from this creature's mouth","it looks half human,half fish","this small creature can be fly"]
	/*	alert(Math.random()*100);                      - рандомні числа від 0-1  * 100   */
	/*alert(Math.floor(5.345453));                     - заокруглює до меншого числа */
	var word=words[Math.floor(Math.random()*words.length)]
	//alert(word);
	
	var answer=[];
	
	var numb=words.indexOf(word);
	alert(que[numb]);
	
	for(var i=0;i<word.length;i++){answer[i]="_ ";}
	var count=20;
	var lengthWord=word.length;
	
	while(count>0){
	alert(answer.join("  "));
	count--;
	
	
	if(lengthWord==0){
	break;
	}
	
	var sumvol=prompt("enter length or cancel");
	if(sumvol===null){break;}
	else if(sumvol.length!=1){alert("enter one length");}
	
	else{for(var j=0;j<word.length;j++){if(word[j]==sumvol){answer[j]=sumvol;
	lengthWord--;
	}}}
	
	
	
	}
	if(count>0){
	document.write("<p class='dg'>Bаше  вгадане слово: "+word+"</p>")
	
	if(word=="rain"){document.body.style.backgroundImage="url(https://ulu-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/876588-rain-wallpaper.gif)"}
	
	else if(word=="sun"){document.body.style.backgroundImage="url(https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&h=350)"}
	
	else if(word=="bones"){document.body.style.backgroundImage="url(https://images-na.ssl-images-amazon.com/images/I/71Zvyx%2BauIL._SY355_.jpg)"}
	
	else if(word=="system"){document.body.style.backgroundImage="url(https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/nervous_system_overview_slideshow/650x350_nervous_system_overview_slideshow.jpg)"}
	
	else if(word=="skin"){document.body.style.backgroundImage="url(http://ulagatamiloli.com/mobi/wp-content/uploads/2015/09/145.jpg)"}
	
	else if(word=="fish"){document.body.style.backgroundImage="url(https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/501587-Amazon.jpg?itok=hEWxmrCx&resize=1100x1100)"}
	
	else if(word=="energy"){document.body.style.backgroundImage="url(https://www.ambyrne.com/wp-content/uploads/2018/01/Keep-your-energy-up-when-taking-business-calls-345x290.jpg)"}
	
	else if(word=="meat"){document.body.style.backgroundImage="url(https://www.agrodigital.com/wp-content/uploads/2017/12/carne2.jpg)"}
	
	else if(word=="body"){document.body.style.backgroundImage="url(https://img.clipartxtras.com/9144f33bd09aff8dc9c980741a2b5d21_royalty-free-internal-organs-clip-art-vector-images-human-internal-organs-clipart_612-344.jpeg)"}
	
	else if(word=="eyes"){document.body.style.backgroundImage="url(https://pe-images.s3.amazonaws.com/photo-effects/cc/rainbow-eye-color/photoshop-rainbow-eyes-angle.jpg)"}
	
	else if(word=="snow"){document.body.style.backgroundImage="url(https://res.cloudinary.com/rebelwalls/image/upload/b_black,c_fill,fl_progressive,h_533,q_auto,w_800/v1428566112/article/R11191_image1)"}
	
	else if(word=="oceans"){document.body.style.backgroundImage="url(https://ensia.com/wp-content/uploads/2014/03/feature_oceans_of_energy_main.jpg)"}
	
	else if(word=="whale"){document.body.style.backgroundImage="url(https://cosmos-magazine.imgix.net/file/spina/photo/9557/080217_whalehearing_1.jpg?fit=clip&w=835)"}
	
	else if(word=="president"){document.body.style.backgroundImage="url(https://img.freepik.com/free-vector/presidential-election-composition-with-flat-design_23-2147908236.jpg?size=338&ext=jpg)"}
	
	else if(word=="nurse"){document.body.style.backgroundImage="url(https://a.optmstr.com/users/c7b926ba65ab/images/109000875a271522467503-Screen-Shot-2018-03-30-at-8.38.00-PM.png)"}
	
	else if(word=="writer"){document.body.style.backgroundImage="url(https://cdn-images-1.medium.com/max/2000/1*mbcrozY9R1BCfawAFV1D2g.jpeg)"}
	
	else if(word=="unicorn"){document.body.style.backgroundImage="url(https://cdn-images-1.medium.com/max/1000/1*VRNy4ZAnCpk4HxSgG5jZtw.png)"}
	
	else if(word=="dragon"){document.body.style.backgroundImage="url(https://www.realmofhistory.com/wp-content/uploads/2018/03/10-mythical-dragon-entities-facts_11.jpg)"}
	
	else if(word=="mermaid"){document.body.style.backgroundImage="url(https://f.ptcdn.info/228/040/000/o2rymen7rIBnQPlAlAc-o.png)"}
	
	else if(word=="fairy"){document.body.style.backgroundImage="url(https://cf2.s3.souqcdn.com/item/2018/05/23/35/20/45/59/item_XL_35204559_136900748.jpg)"}
	}
	
	
	else{document.write("<p class='db'>Bаше не вгадане слово: "+word+"</p>");
	document.body.style.backgroundImage="url(https://image.shutterstock.com/image-vector/you-lose-red-stamp-text-260nw-303609539.jpg)"}
	
	