function solution(s) {
    let data;
    data = s[0].toUpperCase();
  
   for (let i=1; i<s.length; i++) {
       if (s[i-1] === " "){
        data += s[i].toUpperCase();
           continue;
       }
       data += s[i].toLowerCase();
   }
   console.log(data);
    return data;
}