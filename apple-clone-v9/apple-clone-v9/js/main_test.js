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
				container: document.querySelector('#scroll-section-0')
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
		}

		if(yOffset < prevScrollHeight){
			if(currentScene === 0) return;
			currentScene--;
		}


	}

	window.addEventListener('resize', setLayout);
	window.addEventListener('scroll', ()=> {
		yOffset = window.pageYOffset;
		scrollLoop();
	});

	setLayout();
})();