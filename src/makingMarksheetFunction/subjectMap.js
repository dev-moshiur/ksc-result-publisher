
import forNormal from "./forNormal";
import forBanEng from "./forBanEng";
import forOptional from "./forOptional";

 const subjectMap=(item,dispatch)=>{        
    let mark=document.getElementById(item.id).value;   
    if (item.type=='main' ) {
        if ((item.id=='bangla') || (item.id=='english')) {
             forBanEng(item,mark,dispatch)
        } else {
            forNormal(item,mark,dispatch);
        }       
    }
    else if(item.type=='optional'){
        forOptional(item,mark,dispatch)
    }
     else {
        
    }
}
export default subjectMap;

