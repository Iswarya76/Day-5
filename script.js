//Print odd numbers in an array
//Anonymous
var odd=function(num){
    var Odd="";
    for(var i=0;i<num.length;i++){
 if(num[i]%2!==0){
     Odd += num[i]+' ';
 }
    }
    return (Odd);
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));
//IIFE
(function(num){
    var result='';
    for(var i=0;i<num.length;i++){
        if(num[i]%2!=0){
      result += num[i]+' ';
        }
    }
    console.log(result)
})([1,2,3,4,5,6,7,8,9,10]);
//Arrow
let od=(num)=>{
    var on='';
    for(var i=0;i<num.length;i++){
 if(num[i]%2!==0){
     on += num[i]+' ';
 }
    }
    return (on);
}
console.log(od([1,2,3,4,5,6,7,8,9,10]));

//Convert all the strings to title caps in a string array
//Anonymous
var upper=function(str){
    var input=str.toLowerCase().split(" ");
    for(var i=0;i<input.length;i++){
        input[i]=input[i][0].toUpperCase() + input[i].slice(1);
    }
    input.join('');
    var result="";
    for(var i=0;i<input.length;i++){
    result += input[i]+' ';}
    return (result);
}
console.log(upper("world health organisation"));
//IIFE
(function(str){var input=str.toLowerCase().split(" ");
for(var i=0;i<input.length;i++){
    input[i]=input[i][0].toUpperCase() + input[i].slice(1);
}
input.join('');
var result="";
for(var i=0;i<input.length;i++){
result += input[i]+' ';}
console.log(result);})("world health organisation")
//Arrow
let TC=(str)=>{var input=str.toLowerCase().split(" ");
for(var i=0;i<input.length;i++){
    input[i]=input[i][0].toUpperCase() + input[i].slice(1);
}
input.join('');
var result="";
for(var i=0;i<input.length;i++){
result += input[i]+' ';}
return(result);}
console.log(TC("world health organisation"));

//Sum of all numbers in an array
//Anonymous
var sum = function(num){
    var result=0;
    for(var i=0;i<num.length;i++){
  result += num[i];
    }
    return (result);
}
console.log(sum([3,4,5]));
//IIFE
(function(num){
    var result=0;
    for(var i=0;i<num.length;i++){
        result += num[i];
    }
    console.log(result)
})([3,4,5]);
//Arrow
let sumn=(num)=>{
    var result=0;
    for(var i=0;i<num.length;i++){
  result += num[i];
    }
    return (result);
}
console.log(sumn([3,4,5]));

//Return all the prime numbers in an array
//Anonymous
let pri=function(a){
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    return (res);
 
}
console.log(pri([1,12,3,14,5,16,7,18,9,17]));
//IIFE
(function(a){
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    console.log(res);
 
})([1,12,3,14,5,16,7,18,9,17]);
 //Arrow
let pn=(a)=>{
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    return (res);
 
}
console.log(pn([1,12,3,14,5,16,7,18,9,17]));

 //Return all the palindromes in an array
 //Anonymous
 var palin=function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    return ans;
 
}
console.log(palin(["level","code","repaper", "word", "noon"]));
 //IIFE
 (function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
         for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    console.log(ans);
})
(["level","code","repaper", "word", "noon"]);
//Arrow
let palindromes=(a)=>{
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    return ans;
}
console.log(palindromes(["level","code","repaper", "word", "noon"]));

//Return median of two sorted arrays of the same size
//Anonymous
var arr=function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     return med;
    
}
console.log(arr([1,2,3,7],[4,5,6,8]));
//IIFE
(function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
    console.log(med);
    
})([1,2,3,4],[5,6,7,8]);

//Remove duplicates from an array
//Anonymous
var arr=function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     return c;  
}
console.log(arr([1,1,12,15,41,31,4,5,4,3,4,5,4,17,21]));
//IIFE
(function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
    console.log(c);
    
})([1,1,12,15,41,31,4,5,4,3,4,5,4,17,21]);

//Rotate an array by k times
//Anonymous
var rotate=function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  return d;
}
console.log(rotate([1,2,3,4,5,6,7,8,9],3));
//IIFE
(function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d += c[c.length-1];

 console.log(d);

})([1,2,3,4,5,6,7,8,9],3);
