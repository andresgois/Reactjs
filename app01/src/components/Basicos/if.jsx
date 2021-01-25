

const p1 = function (props) {
  if(props.test){
    return props.children
  }else{
    return false
  }
}

export default p1