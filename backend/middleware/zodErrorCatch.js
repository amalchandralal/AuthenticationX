
const formatZodError = (error)=>{
    const formattedZodError = {};
    error.issues.forEach((issue)=>{
        const field = issue.path[0];
        formattedZodError[field] = issue.message
    })
    return formattedZodError;
}

export default formatZodError;