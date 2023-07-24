
import axios from 'axios'
export  async function postCategories(){
    const baseUrl= "https://basic-blog.teamrabbil.com/api"
     let res = await axios.get(baseUrl+"/post-categories")
     if(res.status === 200){
          return res ?.data;
     }else{
        return []
     }

}
export async function postLatest (){
     const baseUrl= "https://basic-blog.teamrabbil.com/api"
     let res = await axios.get(baseUrl +"/post-newest")
     if(res.status ===200)return res ?.data;
     return []
}
export async function byCategoryPost(id){
  const baseUrl= "https://basic-blog.teamrabbil.com/api";
  let res = await axios.get(baseUrl+'/post-list/'+id)
  if(res.status === 200)return res?.data;
  return []
}
export async function postDetails (id){
     const baseUrl= "https://basic-blog.teamrabbil.com/api";
  let res = await axios.get(baseUrl+'/post-details/'+id)
  if(res.status === 200)return res?.data;
  return []
}