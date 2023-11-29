export const checkURLPath=(path:string)=>{
    const currentPath=window.location.pathname
    console.log(currentPath)
    console.log(path)
    if(currentPath===path) return true
    return false
}

export const getCurrentTime = (): string => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };