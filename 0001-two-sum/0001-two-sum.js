/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   for (let i = 0; i<nums.length; i++){
       
      let numbCheck1 = nums[i]
      
      // if(numbCheck1>target)
      //     continue;
      
      for (let j =i+ 1; j<nums.length; j++){
          
          let numbCheck2 = nums[j]

          let testSum = numbCheck1 + numbCheck2;

              if(testSum===target){
                  return [i,j]
              }
             
      }
       
   }
    
//     let index = 0;
//     for (let num of nums){
//         let output = []
//         if(num>=target)
//             continue;
        
//     }
    
    for(let i = 0; i<nums.length; i++){
        let first = i;
        let second = i+1;
        if((nums[first]+nums[second])===target)
            return [i,i+1]
        
        
    }
    
    
};