
exports.getDate= function(){
  let today = new Date();

  let options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  let day=today.toLocaleDateString("en-US",options);
  return day;
}

exports.getMonth=function(){
  let today=new Date();
  let options={
    month:"long"
  };
  let month=today.toLocaleDateString("en-us",options);

  return month;
}
