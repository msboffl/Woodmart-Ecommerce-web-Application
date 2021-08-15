export async function getData(){
    try{
        let data = JSON.parse(localStorage.getItem("users_list"))
        return data;
    }catch(error){
        console.log("Error in fetching data");
        return error;
    }
}