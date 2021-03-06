//즉시함수호출
(()=>{

	let yOffset = 0;
	let prevScrollHeight = 0;
	let currentScene = 0;
	let enterNewScene = false; //새로운 씬이 시작된순간 참


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
				messegeA_opacity:[0, 1, {start: 0.1, end: 0.2}],
				messegeB_opacity:[0, 1, {start: 0.3, end: 0.4}],

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
		//return values(리턴값 적용)
		let rv;
		// 현재 씬(스크롤섹션)에서 스크롤된 범위를 비율로 구하기(전체범위/해당범위)
		const scrollHeight = sceneInfo[currentScene].scrollHeight;
		const scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight;
		//parseInt 정수처리
		//현재전체범위 - 초기위치값 + 해당위치..ㄴ
		// rv = parseInt(scrollRatio * (values[1] - values[0]) + valuse[0]);

		if(values.length === 3){
			//start ~ end 사이에 애니메이션 실행
			const partScrollStart = valuses[2].start * scrollHeight;
			const partScrollEnd = values[2].end * scrollHeight;
			const partScrollHeight = partScrollEnd - partScrollStart;

			if(currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd ){
				rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + valuse[0];	
			}else if(currentYOffset < partScrollStart){
				rv = values[0];
			}else {
				rv = values[1];
			}
		    
		} else {

		    rv = scrollRatio * (values[1] - values[0]) + valuse[0];
			
	    }

		return rv;
	}

	function playAnimation(){
		const objs = sceneInfo[currentScene].objs;
		const values = sceneInfo[currentScene].values;
		const currentYOffset = yOffset - prevScrollHeight;
		//console.log(currenScene, currentYOffset);

		switch(currentScene){
			case 0:
				//확인
				//console.log('0 play!')
				// let messageA_opacity_0 = values.messegeA_opacity[0];
				// let messageA_opacity_2 = values.messegeA_opacity[1];
				// console.log(calcValues(valuse.messegeA_opacity,  currentYOffset));
				let messageA_opacity_in = calcValues(values.messegeA_opacity, currentYOffset);
				// console.log(messageA_opacity_in);
				objs.messageA.style.opacity =  messageA_opacity_in;
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
		enterNewScene = false;
		prevScrollHeight = 0;
		for(let i=0; i < currentScene.length; i++){
			prevScrollHeight += sceneInfo[i].scrollHeight;
		}

		if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
			enterNewScene = true;
			currentScene++;
			document.body.setAttribute('id', `show-scene-${currentScene}`);
		}

		if(yOffset < prevScrollHeight){
			enterNewScene = true;
			if(currentScene === 0) return; // -값 방지..
			currentScene--;
			document.body.setAttribute('id', `show-scene-${currentScene}`);
		}

		if(enterNewScene) return;

		playAnimation();
	}

	
	window.addEventListener('scroll', ()=> {
		yOffset = window.pageYOffset;
		scrollLoop();
	});
	window.addEventListener('load',setLayout);
	window.addEventListener('resize', setLayout);
	
})();