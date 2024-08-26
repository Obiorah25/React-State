export const getAllUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
        
        const data = await response.json();
        if (!response.ok) {
            return { error: "something went worng" };
        }
        return data;
    } catch (error) {
        return { error: "somthing went worng" };
    }
};