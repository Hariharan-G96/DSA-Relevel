var canCompleteCircuit = function(gas, cost) {
    let startPoint = 0;
    let requiredFuel = 0;
    let extraFuel = 0;
    
    for(let i = 0; i < gas.length; i++){
        extraFuel += gas[i] - cost[i];
        
        if(extraFuel < 0){
            startPoint = i + 1;
            requiredFuel += extraFuel;
            extraFuel = 0;
        }
    }
    
    if(extraFuel + requiredFuel >= 0){ // We can go to the startPoint using the extraFuel stored in the requiredFuel 
        return startPoint;
    }
    
    return -1;
};

let gas = [1,2,3,4,5], cost = [3,4,5,1,2];
console.log(canCompleteCircuit(gas, cost));