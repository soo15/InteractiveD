//즉시함수호출
(()=>{

	let yOffset = 0;
	let prevScrollHeight = 0;
	let currentScene = 0;


	//전역변수사용을 피하려고..즉시함수사용
	const sceneInfo = [
		{
			//0
			type : 'sticky',
			heightNum: 5,
			scrollHeight: 0,
			objs:{
				container: document.querySelector('#scroll-section-0'),
				messageA: document.querySelector('#scroll-section-0 .main-message.a'),
				messageB: document.querySelector('#scroll-section-0 .main-message.b'),
				messageC: document.querySelector('#scroll-section-0 .main-message.c'),
				messageD: document.querySelector('#scroll-section-0 .main-message.d')
			},
			values: {
				messegeA_opacity:[0, 1],

			}
		},
		{
			//1
			type : 'normal',
			heightNum: 5,
			scrollHeight: 0,
			objs:{
				container: document.querySelector('#scroll-section-1')
			}
		},
		{
			//2
			type : 'sticky',
			heightNum: 5,
			scrollHeight: 0,
			objs:{
				container: document.querySelector('#scroll-section-2')
			}
		},
		{
			//3 \';
			heightNum: 5,
			scrollHeight: 0,
			objs:{
				container: document.querySelector('#scroll-section-3')
			}
		}
	];

	function setLayout(){
		for(let i=0; i < sceneInfo.length ; i++){
			sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
			sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
		}

		yOffset = window.pageYOffset;

		let totalScrollHeight = 0;
		for(let i = 0; i < sceneInfo.length; i++){
			totalScrollHeight += sceneInfo[i].scrollHeight;
			if(totalScrollHeight >= yOffset){
				currentScene = i;
				break;
			}
		}
		document.body.setAttribute('id', `show-scene-${currentScene}`);
	}

	function calcValues(values, currentYOffset){

	}

	function playAnimation(){
		const objs = sceneInfo[currentScene].objs;
		const values = sceneInfo[currentScene].values;
		switch(currentScene){
			case 0:
				//확인
				//console.log('0 play!')
				let messageA_opacity_0 = values.messegeA_opacity[0];
				let messageA_opacity_2 = values.messegeA_opacity[1];
				console.log(calcValues(valuse.messegeA_opacity, ))
				break;
			case 1:
				break;
			case 2:
				break;
			case 3:
				break;
		}
	}
	
	function scrollLoop(){
		//현재 몇픿셀 스크롤 했는지 확인
		//console.log(yOffset);

		prevScrollHeight = 0;
		for(let i=0; i < currentScene.length; i++){
			prevScrollHeight += sceneInfo[i].scrollHeight;
		}

		if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
			currentScene++
			document.body.setAttribute('id', `show-scene-${currentScene}`);
		}

		if(yOffset < prevScrollHeight){
			if(currentScene === 0) return; // -값 방지..
			currentScene--;
			document.body.setAttribute('id', `show-scene-${currentScene}`);
		}

		
	}

	
	window.addEventListener('scroll', ()=> {
		yOffset = window.pageYOffset;
		scrollLoop();
	});
	window.addEventListener('load',setLayout);
	window.addEventListener('resize', setLayout);
	
})();