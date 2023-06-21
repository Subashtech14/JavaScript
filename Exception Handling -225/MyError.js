const errorObject=new Error();
function func(){
    throw errorObject;
}
try{
    func();
}
catch(err){
    console.log("Errror  Occured");
}
//or we can omit the catch binding
try{}
catch{}
//Finally
const resource=createResource();
try{}
finally{
    resource.destroy();
}