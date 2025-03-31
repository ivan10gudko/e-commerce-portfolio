import supabase from "./supabase";

export async function getTeamPhotos() {

    let { data, error } = await supabase
        .from('Workers')
        .select('id,name,img,imgHover')

    if(error){ 
        console.error(error)
        return error;
    }    
    return data;
}
export async function getPersonDetails(id) {

    
    const { data, error } = await supabase
        .from('Workers')
        .select()
        .eq('id',id)

        
    if(error){ 
        console.error(error)
        return undefined;
    }
    
    return data;
    
}