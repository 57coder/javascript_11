var users = [
    {name: 'Sean', rating: 14},
    {name: 'Ken', rating: 14},
    {name: 'Jeremy', rating: 13}
  ]
  users.sort((a, b) => a.rating - b.rating)
  console.log(users);
  // 非稳定的排序结果可能是
  // [
  //   {name: 'Jeremy', rating: 13}, 
  //   {name: 'Ken', rating: 14}, 
  //   {name: 'Sean', rating: 14}
  // ]
  
  // ECMAScript2019后，Array.sort将是一个稳定的排序，也就是说它可以保证Sean和Ken两个人的顺序在排序后不变
  // [
  //   {name: 'Jeremy', rating: 13}, 
  //   {name: 'Sean', rating: 14}, 
  //   {name: 'Ken', rating: 14}
  // ]