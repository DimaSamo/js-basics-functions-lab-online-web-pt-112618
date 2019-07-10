// Code your solution in this file!
function distanceFromHqInBlocks(block1, block2=42){
  const result = block1 > block2 ? block1-block2 : block2-block1
  return result
}

function distanceFromHqInFeet(block1, block2){
  return distanceFromHqInBlocks(block1, block2)*264
}

function distanceTravelledInFeet(block1, block2){
  return distanceFromHqInBlocks(block1, block2)*264
}

function calculatesFarePrice(start, destination){
  if (distanceTravelledInFeet<400){
    return 0
  }
}
