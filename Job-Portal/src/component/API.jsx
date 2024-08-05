export const fetchIds = async() =>{
    const response = await fetch("https://hacker-news.firebaseio.com/v0/jobstories.json")
    if(!response.ok){
        return
    }
    const data = response.json();
    return data
}

export const fetchCardData = async(id) =>{
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    if(!response.ok){
        return
    }
    const data = response.json();
    return data
}