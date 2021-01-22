                                //********** 1st problem solution is here!!!! ***************/
                                
function kilometerToMeter(kilometer){
    var meter;
 
    if(kilometer>0){
      meter = kilometer *1000;
     return meter;
    }
    else{
     return "Distance Cann't be Negative. Please put a Positive value";
    }
 }
 var result= kilometerToMeter(21);
 console.log(result);

                              //********** 2nd problem solution is here!!!! ***************/

 function budgetCalculator(watch,mobile,laptop){
    if(watch>=0 && mobile>=0 && laptop>0){
        var totalCost;
        totalCost = (watch*50) + (mobile*100) + (laptop*500);
        return totalCost;
    }
    else{
        return "Invalid Number";
    }
}
var result= budgetCalculator(1,0,2);
console.log(result);

                            //********** 3rd problem solution is here!!!! ***************/

function hotelCost(days){
    var cost=0;
     if(days>0){
        if(days<=10){
            cost= days*100;
       }
       else if(days<=20){
           var firstPart= 10*100;
           var remainingDays= days-10;
           var secondPart= remainingDays*80;
           cost= firstPart + secondPart;
       }
       else{
           var firstPart= 10*100;
           var secondPart= 10*80;
           var remainingDays= days-20;
           var thirdPart= remainingDays*50;
           cost= firstPart + secondPart + thirdPart;
       }
       return cost;
       
       }
       else{
           return "Invalid Input!!! Please input valid things";
       }
     }
     
    var total = hotelCost(40);
    console.log(total);

    
                        //********** 4th problem solution is here!!!! ***************/

    function megaFriend(friends){
        var counter=0;
        for(var i=0; i<friends.length; i++){
            if(typeof friends[i]=="string"){
                counter++;
            }
     
        }
        if(friends.length != 0  &&  counter == friends.length){
            maximum= friends[0].length;
            longest=friends[0];
            for(j=0; j<friends.length; j++ ){
                if(friends[j].length>maximum){
                    maximum=friends[j].length;
                    longest=friends[j];
     
                }
            }
            return longest;
        } 
        else{
            return "Invalid Input!!!";
        }
       
     
     }
     var arrayName=["Abir","Kawsar","Jubayer","Rashidul","Mehidi"];
     var result = megaFriend(arrayName);
     console.log(result);