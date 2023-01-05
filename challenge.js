const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
};

const move = (starting, goal) => {
  // write your code here
  const towers = {1:null, 2:null, 3:null};
  towers[starting] = 'start';
  towers[goal] = 'goal'
  Object.keys(towers).forEach((key)=>{
     if(towers[key] === null) towers[key] = 'temp';
  });
  
  Response = `${getKeyByValue(towers, 'start')}->${getKeyByValue(towers, 'temp')} ${getKeyByValue(towers, 'start')}->${getKeyByValue(towers, 'goal')} ${getKeyByValue(towers, 'temp')}->${getKeyByValue(towers, 'goal')}`
  return Response;
};

module.exports = move;

console.log(move(1, 3))
// => 1->2 1->3 2->3

console.log(move(2, 3))
// => 2->1 2->3 1->3
