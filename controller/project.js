function increment(){
  const element1=document.getElementById("ingredientCount");
  let myVar1 = setInterval(incrementCounter1, 50);
  let count1=0;
  function incrementCounter1() {
    count1++;
    document.getElementById("ingredientCount").innerHTML = count1;
    if(count1===20)
    clearInterval(myVar1);
  }
  
  
  const element2=document.getElementById("packageCount");
  let myVar2 = setInterval(incrementCounter2, 5);
  let count2=0;
  function incrementCounter2() {
    count2++;
    document.getElementById("packageCount").innerHTML = count2;
    if(count2===496)
    clearInterval(myVar2);
  }
  
  const element3=document.getElementById("coloriesCount");
  let myVar3 = setInterval(incrementCounter3, 15);
  let count3=0;
  function incrementCounter3() {
    count3++;
    document.getElementById("coloriesCount").innerHTML = count3;
    if(count3===135)
    clearInterval(myVar3);
  }
}
  
  document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', myFunctionForSticky1);
    var proudAndPunch = document.getElementById("proudPunch");
    var top = proudAndPunch.offsetTop;  
    var flag=true;
    var height = proudAndPunch.offsetHeight;  
    function myFunctionForSticky1() {
      if (window.pageYOffset > top-200 && flag) {
        increment();
        flag=false;
      } else {
      }
    }
  })
  