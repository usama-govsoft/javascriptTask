import './App.css';

import FilterImage from './components/filter'

function App() {

  let sum = [];

  for (let i = 1; i <= 9999; i++) {

    if(i==1){
      sum.push({ ...{key:'./images/Screenshot_1.png',total:i}});
    }else if(i==2){
      sum.push({ ...{key:'./images/Screenshot_2.png',total:i}});
    }
    else if(i==3){
      sum.push({ ...{key:'./images/Screenshot_3.png',total:i}});
    }
    else if(i==4){
      sum.push({ ...{key:'./images/Screenshot_4.png',total:i}});
    }
    else if(i==5){
      sum.push({ ...{key:'./images/Screenshot_5.png',total:i}});
    }
    else if(i==6){
      sum.push({ ...{key:'./images/Screenshot_6.png',total:i}});
    }
    else if(i==7){
      sum.push({ ...{key:'./images/Screenshot_7.png',total:i}});
    }
    else if(i==8){
      sum.push({ ...{key:'./images/Screenshot_8.png',total:i}});
    }
    else if(i==9){
      sum.push({ ...{key:'./images/Screenshot_9.png',total:i}});
    }
    else if(i==10){
      sum.push({ ...{key:'./images/Screenshot_10.png',total:i}});
    }
    else if(i==20){
      sum.push({ ...{key:'./images/Screenshot_20.png',total:i}});
    }
    else if(i==30){
      sum.push({ ...{key:'./images/Screenshot_30.png',total:i}});
    }
    else if(i==40){
      sum.push({ ...{key:'./images/Screenshot_40.png',total:i}});
    }
    else if(i==50){
      sum.push({ ...{key:'./images/Screenshot_50.png',total:i}});
    }
    else if(i==60){
      sum.push({ ...{key:'./images/Screenshot_60.png',total:i}});
    }
    else if(i==70){
      sum.push({ ...{key:'./images/Screenshot_70.png',total:i}});
    }
    else if(i==80){
      sum.push({ ...{key:'./images/Screenshot_80.png',total:i}});
    }
    else if(i==90){
      sum.push({ ...{key:'./images/Screenshot_90.png',total:i}});
    }
    else if(i==100){
      sum.push({ ...{key:'./images/Screenshot_100.png',total:i}});
    }
    else if(i==200){
      sum.push({ ...{key:'./images/Screenshot_200.png',total:i}});
    }
    else if(i==300){
      sum.push({ ...{key:'./images/Screenshot_300.png',total:i}});
    }
    else if(i==400){
      sum.push({ ...{key:'./images/Screenshot_400.png',total:i}});
    }
    else if(i==500){
      sum.push({ ...{key:'./images/Screenshot_500.png',total:i}});
    }
    else if(i==600){
      sum.push({ ...{key:'./images/Screenshot_600.png',total:i}});
    }
    else if(i==700){
      sum.push({ ...{key:'./images/Screenshot_700.png',total:i}});
    }
    else if(i==800){
      sum.push({ ...{key:'./images/Screenshot_800.png',total:i}});
    }
    else if(i==900){
      sum.push({ ...{key:'./images/Screenshot_900.png',total:i}});
    }
    else if(i==1000){
      sum.push({ ...{key:'./images/Screenshot_1000.png',total:i}});
    }
    else if(i==1992){
      sum.push({ ...{key:'./images/Screenshot_1992.png',total:i}});
    }
    else if(i==2000){
      sum.push({ ...{key:'./images/Screenshot_2000.png',total:i}});
    }
    else if(i==3000){
      sum.push({ ...{key:'./images/Screenshot_3000.png',total:i}});
    }
    else if(i==4000){
      sum.push({ ...{key:'./images/Screenshot_4000.png',total:i}});
    }
    else if(i==4723){
      sum.push({ ...{key:'./images/Screenshot_4723.png',total:i}});
    }
    else if(i==5000){
      sum.push({ ...{key:'./images/Screenshot_5000.png',total:i}});
    }
    else if(i==6000){
      sum.push({ ...{key:'./images/Screenshot_6000.png',total:i}});
    }
    else if(i==6859){
      sum.push({ ...{key:'./images/Screenshot_6859.png',total:i}});
    }
    else if(i==7000){
      sum.push({ ...{key:'./images/Screenshot_7000.png',total:i}});
    }
    else if(i==7058){
      sum.push({ ...{key:'./images/Screenshot_7058.png',total:i}});
    }
    else if(i==8000){
      sum.push({ ...{key:'./images/Screenshot_8000.png',total:i}});
    }
    else if(i==8971){
      sum.push({ ...{key:'./images/Screenshot_8971.png',total:i}});
    }
    else if(i==9000){
      sum.push({ ...{key:'./images/Screenshot_9000.png',total:i}});
    }
    else if(i==9433){
      sum.push({ ...{key:'./images/Screenshot_9433.png',total:i}});
    }
    else if(i==9938){
      sum.push({ ...{key:'./images/Screenshot_9938.png',total:i}});
    }
    else{
      sum.push({ ...{key:null,total:i}});
    }

    }

    console.log('The sum of natural numbers:', sum);

  return (
    <div className="App">

      <FilterImage sum={sum} />

    </div>
  );
}

export default App;
