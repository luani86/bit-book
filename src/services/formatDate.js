const formatDate = (date) => {
    const ourDate = new Date(date);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = ourDate.getDate();
    const monthIndex = ourDate.getMonth();
    const year = ourDate.getFullYear();
    const hour = ourDate.getHours();
    const minute = ourDate.getMinutes();
    const second = ourDate.getSeconds();
    
    return day + " " + monthNames[monthIndex] + " " + year + " " + hour + ":" + minute + ":" + second;
}

export default formatDate;