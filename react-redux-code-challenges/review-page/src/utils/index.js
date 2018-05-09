export const imageExist = (url) => {
    fetch(url)
    .catch(function (error) {
        if (error.response) {
            console.log(error);
            return error.response.status === 404;
        }

        return true;
    });
}
